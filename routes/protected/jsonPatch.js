const router = require('express').Router();
const ooPatch = require("json8-patch");
const verifyToken = require('../verifyToken');

router.post('/jsonpatch/apply', verifyToken, (req, res)=> {
    const { document, patch } = req.body;
    if(!document || !patch) return res.status(400).send({error: 'invalid input'});

    patchedDocument = ooPatch.apply(document, patch).doc;
    res.send({patchedDocument});
})



module.exports = router;