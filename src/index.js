const Koa = require('koa');
const routes = require("./routes/routes");
const bodyParser = require('koa-bodyparser');

require("./database");

const app = new Koa();

app.use(bodyParser());

app
  .use(routes.routes())
  .use(routes.allowedMethods());

app.listen(4000, () => { console.log("Servidor Despierto.-")});