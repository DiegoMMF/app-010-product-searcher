const { Schema, model } = require('mongoose');

const OptionsSchema = new Schema({
    user: String,
    password: String
})

const SearchDataSchema = new Schema({
    query: String,
    options: OptionsSchema,
    provider: String,
    callbackUrl: String
});

module.exports = model("SearchData", SearchDataSchema);