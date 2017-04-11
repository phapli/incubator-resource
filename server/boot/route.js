var path = require("path");
module.exports = function (app) {
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
  app.use(router);
}

function pt(relative) {
  return path.resolve(__dirname, '../..', relative);
}
