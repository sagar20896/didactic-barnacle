const router = require('express').Router();
const request = require('request');
const sharp = require('sharp');

const verifyToken = require('../verifyToken');

router.post('/image/resize', verifyToken, (req, res)=> {
    const { url } = req.body;
    if(!url) res.status(400).send({error: "Please provide a url in body"});

    // use request and get the image from "url" in a buffer
    request({ url, encoding: null }, (err, response, buffer) => {

        // if err from request then end response with error
        if(err) res.status(500).send({error: "There was a problem while downloading the image"});

        // get the content type so that we can preserve it in our main response 
        const contentType = response.headers['content-type'];
        
        // use "sharp" to resize
        sharp(buffer)
        .resize(50, 50)
        .toBuffer()
        .then( data => { 
            // if resize is successfull, then we send the buffer data back
            res.status(200);
            res.set('Content-Type', contentType);
            res.end(data);
        })
        .catch( err => { 
            // if there is error while resizing
            res.status(500).send({err: "Something went wrong while resizing"})
         });
   });
})



module.exports = router;