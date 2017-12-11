function fontColorFun() {
    "use strict";
    var options = document.getElementById("fontColor");
    var selected = options.selectedIndex;
    document.getElementById("styleExample").style.color = options.options[selected].value;
}

function backgroundColorFun() {
    "use strict";
    var options = document.getElementById("backgroundColor");
    var selected = options.selectedIndex;
    document.getElementById("styleExample").style.backgroundColor = options.options[selected].value;
}

function fontFamilyFun() {
    "use strict";
    var options = document.getElementById("fontFamily");
    var selected = options.selectedIndex;
    document.getElementById("styleExample").style.fontFamily = options.options[selected].value;
}

function fontSizeFun() {
    "use strict";
    var options = document.getElementById("fontSize");
    var selected = options.selectedIndex;
    document.getElementById("styleExample").style.fontSize = options.options[selected].value;
}

function fontVariantFun() {
    "use strict";
    var options = document.getElementById("fontVariant");
    var selected = options.selectedIndex;
    document.getElementById("styleExample").style.fontVariant = options.options[selected].value;
}

function fontColorChange(color) {
    document.getElementById("styleExample").style.color = color;
}

function backgroundColorChange(color) {
    document.getElementById("styleExample").style.backgroundColor = color;
}

function fontFamilyChange(family) {
    document.getElementById("styleExample").style.fontFamily = family;
}

function fontSizeChange(size) {
    document.getElementById("styleExample").style.fontSize = size;
}

function fontVariantChange(variant) {
    document.getElementById("styleExample").style.fontVariant = variant;
}