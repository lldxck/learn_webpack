import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import "../font/iconfont.css";

import peopleImage from "../img/people.png";

const divEle = document.createElement("div");
divEle.className = "title";
divEle.innerHTML = "hello world";

// 设置背景颜色
const divBgEle = document.createElement("div");
divBgEle.className = "image-bg";

// 设置img元素的src
const imgEle = document.createElement("img");
imgEle.src = peopleImage;

// 字体图标
const iEle = document.createElement("i");
iEle.className = "iconfont icon-ambitus02";

console.log(arr.length);

document.body.appendChild(divEle);
document.body.appendChild(divBgEle);
document.body.appendChild(imgEle);
document.body.appendChild(iEle);
