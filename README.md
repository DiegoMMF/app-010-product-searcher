# consignas de lógica

Once a job is successfully delegated, the search order status is set to processing. 

Product results are then sent from Themisto to Ganymede, and the order status is set to fulfilled. If an error occurs during processing, the order status is set to failed.

All products are persisted to the database, with the following schema:
● SKU.
● Product name / title.
● Price.
● Original Price, if there's a discount.
● Product Category ID. An identifier for the product category. Can be a relative path or
URL identifying the category the product falls into. Must be consistent across different
products of the same category.
● Description, if any.
● Images as a list of URLs.
● Related search queries.

Finally, Ganymede makes a request to callbackUrl reporting the order status and, if fulfilled, the
API URL where the order data is served.


# product-search-web-service-ganymede


API endpoints
Endpoints must use semantic HTTP, and validate all their parameters.

POST /api/product/search
This endpoint receives a JSON object with the search data, as follows:
{
query: 'Silla',
provider: 'easy',
options: {
user: '[a username],
password: '[a password]'
},
callbackUrl: 'http://my-endpoint.com/results'
}

Where:
● query is the search string.
● provider is a key that specifies which provider the search must be run on.
● options are provider specific options.
● callbackUrl is a URL where the search results will be posted.
For each request a Search Order is created and persisted to the database. An order consists of:
● A unique ID.
● The search data, as received in the request.
● An order status. Can be either received (default), processing, fulfilled or
failed.
● The product list result, which sits empty until the order is fulfilled.
Once a search order is placed, the endpoint responds with the newly created order.

GET /api/product/search-order/{order-id}
This endpoint receives an order ID, and responds with the order object. Es decir, la búsqueda correspondiente a ese orden.

GET /api/product/search-orders
This endpoint returns the full list of search orders. Be mindful of memory. Debemos aplicar un índice? Bajo qué criterio?

GET /api/product/category/{product-category-id}
This endpoint returns the list of all products associated with the given product category ID. Again, be mindful of memory. Ahora, sí, un índice basado en la categoría.