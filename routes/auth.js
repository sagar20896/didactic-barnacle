const router = require('express').Router();
const jwt = require('jsonwebtoken')
// import input validation methods
const { loginInputValidation } = require('./validateInput');

router.post('/login', (req, res)=> {
    //enter username and input with more than 8 chars
    const {error} = loginInputValidation(req.body);

    // simply send the error
    if(error) return res.status(400).send({error: 'invalid input'});

    // if there is no error after input validation, accept any username and password
    const { username } = req.body;
    // if no error in the input
    const token = jwt.sign({ username }, process.env.TOKEN_SECRET)
    res.header('auth-token', token)
    res.send({message: "Login success"})
})



module.exports = router;