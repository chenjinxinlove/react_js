// 原型继承

function Parent (name) {
    this.name = name;
    this.age = 'age';
}

Parent.prototype.getName = function () {
    return this.name;
}

// function Son () {
//     Parent.call(this, 'chen');
// }

// function object(o) {
//     function F() {};
//     F.prototype = o;
//     return new F();
// }

// Son.prototype = object(Parent.prototype);
// Son.prototype.constructor = Son;

class Son extends Parent {
    constructor(name) {
        super(name);
    }
    getNamedd () {
        return super.getName();
    }
}

var f = new Son('chen');
console.log(f.getNamedd);
