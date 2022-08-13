import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import { createApp } from "vue/dist/vue.esm-bundler";
import App from './vue/App.vue'

import "./js/element";
// import './css/style.css'

const message = "hello world";
const names = ["abc", "bcd", "cde"];
names.forEach((item) => console.log(item));

console.log(sum(20, 30));
console.log(priceFormat(59));

// 编写vue代码
// const App = {
//   template: "#demo",
// };
const app = createApp(App);
app.mount("#app");
