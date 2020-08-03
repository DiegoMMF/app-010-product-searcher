const { Schema, model } = require('mongoose');
const Product = require("./Product");
const SearchData = require('./SearchData');

const SearchOrderSchema = new Schema({
    searchData: SearchData.schema,
    status: String,
    productList: Product.schema
});

module.exports = model("SearchOrder", SearchOrderSchema);