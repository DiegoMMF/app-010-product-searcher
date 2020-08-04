const mongoose = require('mongoose');
const SearchOrder = require('./models/SearchOrder');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log("host: ", mongoose.connection.host);
console.log("id: ", mongoose.connection.id);

console.log("name: ", mongoose.connection.name);
console.log("port: ", mongoose.connection.port);

(async () => {
    const nuevaOrden = new SearchOrder({
        searchData: {
            query: "calefones",
            provider: "musimundo",
            options: {
                user: "roberto",
                password: "carlos"
            },
            callbackUrl: "https://ensayosypoemas.wordpress.com"
        },
        status: "received",
        productList: {}
    });
    nuevaOrden.save((err) => { 
        if (err) console.log(err)
    });
    console.log()})();

    console.log("models: ", mongoose.connection.models);
// .then(mongoose.connection.close())
// .catch(console.error());