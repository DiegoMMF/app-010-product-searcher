const getOrderById = (ctx) => {
    ctx.body = `Hello world! Prefix: ${ctx.route.prefix}`
};

module.exports = getOrderById;