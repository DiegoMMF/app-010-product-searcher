function getProductByCategoryId() {
    app.use(async ctx => {
        ctx.body = 'Hello World';
    });
};

module.exports = getProductByCategoryId;