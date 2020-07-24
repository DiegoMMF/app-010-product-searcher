/**
 * Aquí definimos nuestro esquema de persistencia para las búsquedas, con MongoDB,
 * y exportamos la interface y el modelo del mismo.
 */

import mongoose, { Schema, Document } from 'mongoose';

/**
 * No tiene mucha ciencia, es autodefinida,casi
 * 
 * @interface Producto
 * 
 * @extends Document an interface that extends MongooseDocument, NodeJS.EventEmitter & ModelProperties.
 * This will add the required functions and fields to our interface, such as save(), remove(), __v, etc.
 * 
 */
export interface Producto extends Document {
    "SKU": "String",
    "name": "String",
    "price": "Long",
    "originalPrice": "Long",
    "categoryID": "String",
    "Description": "String",
    "Images":"Array",
    "relatedQueries": "Array"
}

/**
 * Nuestro Esquema para almacenar las búsquedas realizadas por la app Ganymede
 * TypeScript reconoce la expresión porque instalamos @types/mongoose
 * 
 */
const EsquemaBusqueda: Schema = new Schema({
    /**
    * SKU: This term uses terminology from the GoodRelations Vocabulary for E-Commerce, created by Martin Hepp.
    * GoodRelations is a data model for sharing e-commerce data on the Web. More information about GoodRelations
    * can be found at http://purl.org/goodrelations/.
    */
    "SKU": { type: "String", required: true },
    "name": { type: "String", required: true },
    "price": { type: "Long", required: true },
    "originalPrice": { type: "Long", required: true },
    "categoryID": { type: "String", required: true },
    "Description": { type: "String", required: true },
    "Images":{ type: "Array", required: true },
    "relatedQueries": { type: "Array", required: true }
});

/**
 * mongoose.model function takes two parameters, a name, and your schema, it will return our interface
 */
export default mongoose.model<Producto>('Busqueda', EsquemaBusqueda);