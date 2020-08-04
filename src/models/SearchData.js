const { Schema, model } = require('mongoose');

const OptionsSchema = new Schema({
    user: String,
    password: String
})

const SearchDataSchema = new Schema({
    query: String,
    provider: String,
    options: OptionsSchema,
    callbackUrl: String
});

module.exports = model("SearchData", SearchDataSchema);