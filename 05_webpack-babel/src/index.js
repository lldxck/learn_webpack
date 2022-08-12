import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import "./js/element";
// import './css/style.css'

const message = "hello world";
const names = ["abc", "bcd", "cde"];
names.forEach((item) => console.log(item));

console.log(sum(20, 30));
console.log(priceFormat(59));
