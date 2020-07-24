import mongoose, { Schema } from 'mongoose';

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

export default mongoose.model('Busqueda', EsquemaBusqueda);

/**
 * SKU: This term uses terminology from the GoodRelations Vocabulary for E-Commerce, created by Martin Hepp.
 * GoodRelations is a data model for sharing e-commerce data on the Web. More information about GoodRelations
 * can be found at http://purl.org/goodrelations/.
 */