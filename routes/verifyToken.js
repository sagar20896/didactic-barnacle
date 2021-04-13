const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send({ error: 'Access denied' })

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified;
    } catch(err) {
        res.status(400).send({ error: 'Invalid token' })
    }
    next();
}

module.exports = verifyToken;