/**
 * @fileoverview definición del esquema principal para la
 * colección de órdenes de búsqueda.
 */

const { Schema, model } = require('mongoose');
const Product = require("./Product");

const OptionsSchema = new Schema({
    user: {
        type: String, 
        required: true },
    password: {
        type: String, 
        required: true }
})

const SearchDataSchema = new Schema({
    query: {
        type: String, 
        required: true },
    provider: {
        type: String, 
        required: true },
    options: {
        type: OptionsSchema,
        required: true
    },
    callbackUrl: {
        type: String, 
        required: true }
});

const SearchOrderSchema = new Schema({
    searchData: {
        type: SearchDataSchema, 
        required: true },
    status: {
        type: String, 
        required: true },
    productList: {
        type: [Product.schema], 
        required: true }
});

module.exports = model("SearchOrder", SearchOrderSchema);