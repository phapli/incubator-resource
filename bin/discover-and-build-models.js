var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mysql;
ds.discoverAndBuildModels('User', {schema: 'loopback'},
    function(err, models) {
  if (err) throw err;

  models.User.find(function(err, user) {
    if (err) throw err;

    console.log('Found:', user);

    ds.disconnect();
  });
});