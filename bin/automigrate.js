var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mysql;
ds.automigrate('User', function (err) {
  if (err) throw err;
  // app.models.User.create({}, function (err, model) {
  //   if (err) throw err;
  //   console.log('Created:', model);
  // });
});

ds.automigrate('AccessToken', function (err) {
  if (err) throw err;
  // app.models.Role.create({}, function (err, model) {
  //   if (err) throw err;
  //   console.log('Created:', model);
  // });
});

ds.automigrate('Role', function (err) {
  if (err) throw err;
  // app.models.Role.create({}, function (err, model) {
  //   if (err) throw err;
  //   console.log('Created:', model);
  // });
});

ds.automigrate('RoleMapping', function (err) {
  if (err) throw err;
  // app.models.RoleMapping.create({}, function (err, model) {
  //   if (err) throw err;
  //   console.log('Created:', model);
  // });
});

ds.automigrate('ACL', function (err) {
  if (err) throw err;
  // app.models.ACL.create({}, function (err, model) {
  //   if (err) throw err;
  //   console.log('Created:', model);
  // });
});

ds.automigrate('Resource', function (err) {
  if (err) throw err;
  // app.models.Resource.create({}, function (err, model) {
  //   if (err) throw err;
  //   console.log('Created:', model);
  // });
});

ds.disconnect();
