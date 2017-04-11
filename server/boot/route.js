var path = require("path");
module.exports = function (app) {
    var User = app.models.user;
    var router = app.loopback.Router();
    router.get('/ping', function (req, res) {
        res.send('pongaroo');
    });
    router.get('/login', function (req, res) {
        res.sendFile(pt('client/login.html'));
    });
    router.get('/add', function (req, res) {
        res.sendFile(pt('client/add.html'));
    });
    router.get('/resource', function (req, res) {
        res.sendFile(pt('client/add.html'));
    });
    router.get('/request', function (req, res) {
        res.sendFile(pt('client/add.html'));
    });
    router.get('/', function (req, res) {
        res.sendFile(pt('client/index.html'));
    });

    router.post('/login', function (req, res) {
        User.login({
            email: req.body.email,
            password: req.body.password
        }, 'user', function (err, token) {
            if (err) {
                res.send(err);
            }

            res.send({ //login user and render 'home' view
                email: req.body.email,
                accessToken: token.id
            });
        });
    });

    app.use(router);
}

function pt(relative) {
    return path.resolve(__dirname, '../..', relative);
}
