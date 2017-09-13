// 原型继承

function parent () {
    this.name = 'chen';
    this.age = 'age';
}

parent.prototype.getName = function () {
    return this.name;
}

function Son () {

}

Son.prototype = new parent();
Son.prototype.constructor = Son;

var f = new Son();

console.log(f.getName());