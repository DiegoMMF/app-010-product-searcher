import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    "SKU": String,
    "productName": String,
    "actualPrice": Number,
    "originalPrice": Number,
    "productCategoryID": String,
    "ProductDescription": String,
    "imagesUrl":Array<String>,
    "relatedQueries": Array<String>
}

const EsquemaBusqueda: Schema = new Schema({
    "SKU": { type: "String", required: true },
    "name": { type: "String", required: true },
    "price": { type: "Long", required: true },
    "originalPrice": { type: "Long", required: true },
    "categoryID": { type: "String", required: true },
    "Description": { type: "String", required: true },
    "Images":{ type: "Array", required: true },
    "relatedQueries": { type: "Array", required: true }
});

export default mongoose.model<Producto>('Busqueda', EsquemaBusqueda);