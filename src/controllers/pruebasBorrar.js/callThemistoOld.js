/**
 * @fileoverview utilizado para comprobaciones.
 * 
 * Todavía no puedo solucionar el tema del intercambio
 * entre servidores y pasaje de JSONs,
 * me parece que G enviará queries a T en lugar de body
 */

const fetch = require("node-fetch");

const callTheSearcher = async (searchOrder) => {
  searchOrder.status = "processing";
  try {
    const res = await fetch(process.env.THEMISTO, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: /* JSON.stringify( */searchOrder/* ) */
    });

    console.log("Dentro del try de callTheSearcher. fetch(process.env.THEMISTO) da: \n", res);

    const newSearchOrder = await res.json();

    newSearchOrder.status = "fulfilled";

    return newSearchOrder;

  } catch {

    searchOrder.status = "failed";

    return searchOrder;

  }
};

module.exports = callTheSearcher;