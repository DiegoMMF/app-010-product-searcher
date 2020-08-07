const fetch = require("node-fetch");

const callThemisto = async (searchOrder) => {
  searchOrder.status = "processing";
  try {
    const res = await fetch(process.env.THEMISTO, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: /* JSON.stringify( */searchOrder/* ) */
    });

    console.log("Dentro del try de callThemisto. fetch(process.env.THEMISTO) da: \n", res);

    const newSearchOrder = await res.json();

    newSearchOrder.status = "fulfilled";

    return newSearchOrder;

  } catch {

    searchOrder.status = "failed";

    return searchOrder;

  }
};

module.exports = callThemisto;