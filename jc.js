// 原型继承

function Parent () {
    this.name = 'chen';
    this.age = 'age';
}

Parent.prototype.getName = function () {
    return this.name;
}

function Son () {

}

Son.prototype = new parent();
Son.prototype.constructor = Son;

var f = new Son();
