const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    if (username === 'admin') {
        if (password === 'admin') {
            const token = jwt.sign({ username: username, password: password }, 'secret', { expiresIn: 5000 });
            res.json({ status: true, message: 'user login successfully.', token: token });
        } else {
            res.status(401).json({ status: false, message: 'Password is incorrect.' });
        }
    } else {
        res.status(401).json({ status: false, message: 'Username is incorrect.' });
    }
}

const authentication = (req, res, next) => {
    var token = req.headers.authorization || '';

    token = token.split(' ')[1];

    if (!token) {
        res.status(401).json({ status: false, message: 'token required.' });
    } else {
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                res.status(401).json({ status: false, message: 'Invalid token.' });
            } else {
                const date = (new Date()).getTime();
                
                if (date < decoded.exp) {
                    res.status(401).json({ status: false, message: 'Token expired.' });
                } else {
                    next();
                }
            }
        });
    }
}

module.exports = {
    login,
    authentication
}