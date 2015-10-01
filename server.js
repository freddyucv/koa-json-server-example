var koa    = require('koa')();
var Router = require('koa-router');
var jsonServer = require('koa-json-server');
var jsonBody = require('koa-json-body');

var koaRouter = new Router();

koa.use(jsonBody());
koa.use(jsonServer(__dirname + '/db'));

koaRouter.get('/hello', function *(next) {
  this.body = 'Hello World!';
});

koa.use(koaRouter.routes());

koa.listen(3000);
