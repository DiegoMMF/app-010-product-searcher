const mongoose = require('mongoose');
const SearchOrder = require('./models/SearchOrder');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log(
    "DB: ", "\n",
    "host: ", mongoose.connection.host, "\n",
    "id: ", mongoose.connection.id, "\n",
    "name: ", mongoose.connection.name, "\n",
    "port: ", mongoose.connection.port, "\n",
    "models: ", mongoose.connection.models
);
