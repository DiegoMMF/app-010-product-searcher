const fetch = require("node-fetch");

const callThemisto = async (searchOrder) => {
    searchOrder.status = "processing";

    console.log("searchOrder dentro de callThemisto es: \n", searchOrder);

    let respuesta = await fetch("https://dashboard.heroku.com/apps/diegommf-themisto/", {
        method: 'post',
        body:    JSON.stringify(searchOrder),
        headers: { 'Content-Type': 'application/json' },
    })

    console.log("let respuesta = await fetch(): \n", respuesta);

    let datos = await respuesta.json() // o ".JSON" ?

    console.log("let datos = await respuesta.json(): \n", datos);

    return datos
    /* .then(res => {
        res.json();
        console.log("res.json() dentro de fetch().then: \n", res.json());
    })
    .then(json => console.log(".then(json => console.log(json)) devuelve esto: \n",json)); */
};

module.exports = callThemisto;