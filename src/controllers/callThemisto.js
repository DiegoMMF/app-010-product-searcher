/**
 * Todavía no puedo solucionar el tema del intercambio
 * entre servidores y pasaje de JSONs,
 * me parece que G enviará queries a T en lugar de body
 */
// const dotenv = require("dotenv").config();
const fetch = require("node-fetch");

/**
 * 
 * @param { Object } searchOrder documento de nuestra DB
 * que contiene la orden de búsqueda inicializada en newSearchOrder
 */
const callThemisto = async (searchOrder) => {
    searchOrder.status = "processing";

    console.log("searchOrder dentro de callThemisto es: \n", searchOrder);

    let respuesta = await fetch(process.env.THEMISTO, {
        method: 'post',
        body:    JSON.stringify(searchOrder),
        headers: { 'Content-Type': 'application/json' },
    })

    console.log("let respuesta = await fetch() dentro de callThemisto: \n", respuesta);

    let datos = await respuesta.json()

    datos.status = "fulfilled"; // luego agregaré la opción de "failed", al manejar errores y validación
    console.log("let datos = await respuesta.json() dentro de callThemisto: \n", datos);
    
    return datos;
};

module.exports = callThemisto;