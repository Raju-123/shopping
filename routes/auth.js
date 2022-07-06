const auth = require('../controller/auth');

exports.authRoutes = function (app) {
    app.group('/user', (router) => {
        router.post('/login', auth.login);
    });
}
