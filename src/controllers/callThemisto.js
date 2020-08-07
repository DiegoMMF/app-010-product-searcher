async function callThemisto(searchOrder) {

  const response = await fetch('https://dashboard.heroku.com/apps/diegommf-themisto', {
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(searchOrder)
  });

  return response.json();
}

module.exports = callThemisto;

/* const Koa = require("koa");
const Router = require("koa-router");
const fetch = require("node-fetch");

new Koa()
  .use(
    new Router()
      .get("/characters/:id", async ctx => {
        try {
          const res = await fetch(`https://swapi.co/api/people/${ctx.params.id}`);

          if (!res.ok) {
            throw new Error("Bad response");
          }

          const character = await res.json();
          const filteredCharacter = { name: character.name };

          ctx.status = 200;
          ctx.body = filteredCharacter;
        } catch (e) {
          ctx.status = 502;
        }
      })
      .routes(),
  )
  .listen(3000); */