const fetch = require("node-fetch");

const callThemisto = async (searchOrder) => {
  searchOrder.status = "processing";
  try {
    console.log("Dentro del try de callThemisto(searchOrder) JSON.stringify(searchOrder) da: \n", JSON.stringify(searchOrder));
    // --> {"status":"processing"}
    // --> ergo, no lo está procesando bien.
    const res = await fetch(process.env.LOCAL_SRV, {
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchOrder)
    });

    if (!res.ok) {
      throw new Error("Bad response from Themisto");
    }

    const newSearchOrder = await res.json();

    newSearchOrder.status = "fulfilled";

    return newSearchOrder;

  } catch {

    searchOrder.status = "failed";

    return searchOrder;

  }
};

module.exports = callThemisto;