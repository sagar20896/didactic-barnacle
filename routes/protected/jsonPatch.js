const router = require('express').Router();
const ooPatch = require("json8-patch");
const verifyToken = require('../verifyToken');

router.post('/jsonpatch/apply', verifyToken, (req, res)=> {
    const { document, patch } = req.body;
    // if doccument and patch are not found in the body, then 
    if(!document || !patch) return res.status(400).send({error: 'invalid input'});

    // use "json8-patch" to apply the patch to document provided
    patchedDocument = ooPatch.apply(document, patch).doc;
    res.send({patchedDocument});
})



module.exports = router;