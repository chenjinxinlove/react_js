function A(name) {
    this.name = name;
}

A.prototype.getName = function() {
    return this.name;
}

function B() {
    A.call(this, 'chen')
}

// B.prototype = new A();
// B.prototype = Object.create(A.prototype);
// B.prototype = b(A.prototype);

function b (prop) {
    function F() {};
    F.prototype = prop;
    return new F(); 
}

function superPrototype(su, superType) {
    var prototype = b(superType);
    prototype.constructor = superType;
    subType.prototype = prototype;
}

superPrototype(A.prototype, B.prototype)
var F = new B();
console.log(F.getName());