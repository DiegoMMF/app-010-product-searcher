function getOrderById() {
    app.use(async ctx => {
        ctx.body = 'Hello World';
    });
};

module.exports = getOrderById;