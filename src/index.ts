require("dotenv");
import Koa from "koa";
import { DefaultState, DefaultContext, ParameterizedContext } from "koa";
import Router from "koa-router";

const app/* : Koa<DefaultState, DefaultContext> */ = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => console.log("Jola, chín!"));