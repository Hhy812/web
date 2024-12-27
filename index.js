var d1 = document.querySelector("#d1");
var d2 = document.querySelectorAll(".d2");
for (i in d2) {
    d2[i].onclick = function () {
        this.style.backgroundColor = "red";
        this.style.width = 100 * i + "px";
        //this.parentNode.removeChild(this);
        this.innerHTML = "你猜对了";
    };
    d2[i].onmouseover = function () {
        this.style.backgroundColor = "yellow";
    };
    d2[i].onmouseout = function () {
        this.style.backgroundColor = "green";
        this.style.width = 100 * i + "px";
        this.style.height = 100 * i + "px";
    };
}
d1.addEventListener("click", function () {
    this.style.backgroundColor = "blue";
});
d1.removeEventListener("click", function () {
    this.style.backgroundColor = "blue";
});
window.onload = function () {
    alert("成功加载页面");
    let ran = Math.random();
    alert(ran);
};
// window.addEventListener("mouseover", function () {
//     alert("哈哈哈");
// });
var header = document.querySelector(".header");

// window.addEventListener("mousemove", function () {
//     alert("哈哈哈");
// });

setInterval(function () {
    let d4 = document.querySelector(".d4");
    // d4.style.width = Math.random() * 1000 + "px";
    // d4.style.height = Math.random() * 1000 + "px";
    d4.innerHTML = Date();
    d4.style.backgroundColor =
        "rgb(" +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        ")";
}, 1000);


var d5 = document.querySelector(".d5");
for (i = 0; i < 400; i++) {
    d5.innerHTML += "<div class=\"d6\"><div>"
}
var d6s = document.querySelectorAll(".d6");
for (i in d6s) {
    d6s[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "red";
    })
    d6s[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "green";
    })
    d6s[i].addEventListener("click", function () {
        this.style.backgroundColor = "#000";
    })
}