var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mysql;
ds.discoverSchema('User', {schema: 'loopback'}, function(err,
    schema) {
  if (err) throw err;

  var json = JSON.stringify(schema, null, '  ');
  console.log(json);
});

ds.discoverSchema('Role', {schema: 'loopback'}, function(err,
    schema) {
  if (err) throw err;

  var json = JSON.stringify(schema, null, '  ');
  console.log(json);
});

ds.discoverSchema('RoleMapping', {schema: 'loopback'}, function(err,
    schema) {
  if (err) throw err;

  var json = JSON.stringify(schema, null, '  ');
  console.log(json);
});

ds.discoverSchema('ACL', {schema: 'loopback'}, function(err,
    schema) {
  if (err) throw err;

  var json = JSON.stringify(schema, null, '  ');
  console.log(json);
});

ds.discoverSchema('Resource', {schema: 'loopback'}, function(err,
    schema) {
  if (err) throw err;

  var json = JSON.stringify(schema, null, '  ');
  console.log(json);
});

ds.discoverSchema('AccessToken', {schema: 'loopback'}, function(err,
    schema) {
  if (err) throw err;

  var json = JSON.stringify(schema, null, '  ');
  console.log(json);
});

ds.disconnect();