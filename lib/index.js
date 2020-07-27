"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const app = new koa_1.default();
app.use(async (ctx) => {
    ctx.body = 'Hello World';
});
app.listen(3000, () => console.log("Jola, chín!"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBcUI7QUFFckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRTtJQUNsQixHQUFHLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztBQUMzQixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSBcImtvYVwiXG5cbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTtcblxuYXBwLnVzZShhc3luYyBjdHggPT4ge1xuICBjdHguYm9keSA9ICdIZWxsbyBXb3JsZCc7XG59KTtcblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiBjb25zb2xlLmxvZyhcIkpvbGEsIGNow61uIVwiKSk7Il19