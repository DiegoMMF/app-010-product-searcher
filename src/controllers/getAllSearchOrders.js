const getAllSearchOrders = (ctx) => {
    ctx.body = `Hello world! Prefix: ${ctx.route.prefix}`
};

module.exports = getAllSearchOrders;