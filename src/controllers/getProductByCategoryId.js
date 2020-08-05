const getProductByCategoryId = (ctx) => {
    ctx.body = `Hello world! Prefix: ${ctx.route.prefix}`
};

module.exports = getProductByCategoryId;