Example of: https://www.npmjs.com/package/koa-json-server


## To install

`npm install`

##Run

`npm start`

`node server.js`

##To use

```javascript
//server.js
var koa    = require('koa')();
var Router = require('koa-router');
var jsonServer = require('koa-json-server');

var koaRouter = new Router();

koa.use(jsonServer(__dirname + '/db'));

koaRouter.get('/hello', function *(next) {
  this.body = 'Hello World!';
});

koa.use(koaRouter.routes());

koa.listen(3000);
```

###Url to test

* http://localhost:3000/users/
* http://localhost:3000/users/1
* http://localhost:3000/users/1/bets
* http://localhost:3000/users/1/bets/2
