/**
 * @fileoverview utilizado para comprobaciones.
 * 
 * Todavía no puedo solucionar el tema del intercambio
 * entre servidores y pasaje de JSONs,
 * me parece que G enviará queries a T en lugar de body
 */

const body = { a: 1 };
 
fetch('https://httpbin.org/post', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));