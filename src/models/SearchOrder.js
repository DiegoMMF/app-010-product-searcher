const { Schema, model } = require('mongoose');
const Product = require("./Product");

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

const SearchOrderSchema = new Schema({
    searchData: SearchDataSchema,
    status: String,
    productList: Product.schema
});

module.exports = model("SearchOrder", SearchOrderSchema);