import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import { createApp } from "vue/dist/vue.esm-bundler";
// import App from "./vue/App.vue";
import App from "./vue/App";

import "./js/element";
// import './css/style.css'

if (module.hot) {
  module.hot.accept("./vue/App.vue", () => {
    console.log("APP.vue模块发生更新了");
  });
}

const message = "hello world";
const names = ["abc", "bcd", "cde"];
names.forEach((item) => console.log(item));

console.log(sum(20, 30));
console.log(priceFormat(59));

console.log("啦啦啦111");

// 编写vue代码
// const App = {
//   template: "#demo",
// };
const app = createApp(App);
app.mount("#app");
