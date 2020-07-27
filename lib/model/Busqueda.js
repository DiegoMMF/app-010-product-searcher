"use strict";
/**
 * Aquí definimos nuestro esquema de persistencia para las búsquedas, con MongoDB,
 * y exportamos la interface y el modelo del mismo.
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
/**
 * Nuestro Esquema para almacenar las búsquedas realizadas por la app Ganymede
 * TypeScript reconoce la expresión porque instalamos @types/mongoose
 *
 */
const EsquemaBusqueda = new mongoose_1.Schema({
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
    "Images": { type: "Array", required: true },
    "relatedQueries": { type: "Array", required: true }
});
/**
 * mongoose.model function takes two parameters, a name, and your schema, it will return our interface
 */
exports.default = mongoose_1.default.model('Busqueda', EsquemaBusqueda);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVzcXVlZGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWwvQnVzcXVlZGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7Ozs7Ozs7O0FBRUgscURBQXNEO0FBc0J0RDs7OztHQUlHO0FBQ0gsTUFBTSxlQUFlLEdBQVcsSUFBSSxpQkFBTSxDQUFDO0lBQ3ZDOzs7O01BSUU7SUFDRixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDekMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN6QyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDakQsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2hELGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUNqRCxRQUFRLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDMUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDdEQsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxrQkFBZSxrQkFBUSxDQUFDLEtBQUssQ0FBVyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFxdcOtIGRlZmluaW1vcyBudWVzdHJvIGVzcXVlbWEgZGUgcGVyc2lzdGVuY2lhIHBhcmEgbGFzIGLDunNxdWVkYXMsIGNvbiBNb25nb0RCLFxuICogeSBleHBvcnRhbW9zIGxhIGludGVyZmFjZSB5IGVsIG1vZGVsbyBkZWwgbWlzbW8uXG4gKi9cblxuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XG5cbi8qKlxuICogTm8gdGllbmUgbXVjaGEgY2llbmNpYSwgZXMgYXV0b2RlZmluaWRhLGNhc2lcbiAqIFxuICogQGludGVyZmFjZSBQcm9kdWN0b1xuICogXG4gKiBAZXh0ZW5kcyBEb2N1bWVudCBhbiBpbnRlcmZhY2UgdGhhdCBleHRlbmRzIE1vbmdvb3NlRG9jdW1lbnQsIE5vZGVKUy5FdmVudEVtaXR0ZXIgJiBNb2RlbFByb3BlcnRpZXMuXG4gKiBUaGlzIHdpbGwgYWRkIHRoZSByZXF1aXJlZCBmdW5jdGlvbnMgYW5kIGZpZWxkcyB0byBvdXIgaW50ZXJmYWNlLCBzdWNoIGFzIHNhdmUoKSwgcmVtb3ZlKCksIF9fdiwgZXRjLlxuICogXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdG8gZXh0ZW5kcyBEb2N1bWVudCB7XG4gICAgXCJTS1VcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcInByaWNlXCI6IFwiTG9uZ1wiLFxuICAgIFwib3JpZ2luYWxQcmljZVwiOiBcIkxvbmdcIixcbiAgICBcImNhdGVnb3J5SURcIjogXCJTdHJpbmdcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJJbWFnZXNcIjpcIkFycmF5XCIsXG4gICAgXCJyZWxhdGVkUXVlcmllc1wiOiBcIkFycmF5XCJcbn1cblxuLyoqXG4gKiBOdWVzdHJvIEVzcXVlbWEgcGFyYSBhbG1hY2VuYXIgbGFzIGLDunNxdWVkYXMgcmVhbGl6YWRhcyBwb3IgbGEgYXBwIEdhbnltZWRlXG4gKiBUeXBlU2NyaXB0IHJlY29ub2NlIGxhIGV4cHJlc2nDs24gcG9ycXVlIGluc3RhbGFtb3MgQHR5cGVzL21vbmdvb3NlXG4gKiBcbiAqL1xuY29uc3QgRXNxdWVtYUJ1c3F1ZWRhOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICAvKipcbiAgICAqIFNLVTogVGhpcyB0ZXJtIHVzZXMgdGVybWlub2xvZ3kgZnJvbSB0aGUgR29vZFJlbGF0aW9ucyBWb2NhYnVsYXJ5IGZvciBFLUNvbW1lcmNlLCBjcmVhdGVkIGJ5IE1hcnRpbiBIZXBwLlxuICAgICogR29vZFJlbGF0aW9ucyBpcyBhIGRhdGEgbW9kZWwgZm9yIHNoYXJpbmcgZS1jb21tZXJjZSBkYXRhIG9uIHRoZSBXZWIuIE1vcmUgaW5mb3JtYXRpb24gYWJvdXQgR29vZFJlbGF0aW9uc1xuICAgICogY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9wdXJsLm9yZy9nb29kcmVsYXRpb25zLy5cbiAgICAqL1xuICAgIFwiU0tVXCI6IHsgdHlwZTogXCJTdHJpbmdcIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBcIm5hbWVcIjogeyB0eXBlOiBcIlN0cmluZ1wiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIFwicHJpY2VcIjogeyB0eXBlOiBcIkxvbmdcIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBcIm9yaWdpbmFsUHJpY2VcIjogeyB0eXBlOiBcIkxvbmdcIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBcImNhdGVnb3J5SURcIjogeyB0eXBlOiBcIlN0cmluZ1wiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIFwiRGVzY3JpcHRpb25cIjogeyB0eXBlOiBcIlN0cmluZ1wiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIFwiSW1hZ2VzXCI6eyB0eXBlOiBcIkFycmF5XCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgXCJyZWxhdGVkUXVlcmllc1wiOiB7IHR5cGU6IFwiQXJyYXlcIiwgcmVxdWlyZWQ6IHRydWUgfVxufSk7XG5cbi8qKlxuICogbW9uZ29vc2UubW9kZWwgZnVuY3Rpb24gdGFrZXMgdHdvIHBhcmFtZXRlcnMsIGEgbmFtZSwgYW5kIHlvdXIgc2NoZW1hLCBpdCB3aWxsIHJldHVybiBvdXIgaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsPFByb2R1Y3RvPignQnVzcXVlZGEnLCBFc3F1ZW1hQnVzcXVlZGEpOyJdfQ==