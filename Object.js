var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: 'CHEN'
});
console.log(person.name);//CHEN
person.name = 'jin';
console.log(person.name);//CHEN

var book = {
    _year : 2004,
    edition: 1
};

// Object.defineProperty(book, "year", {
//     get: function () {
//         return this._year;
//     },
//     set: function (newValue) {
//         if (newValue > 2004) {
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
//     }
// })

book.year = 2019;
console.log(book);//{ _year: 2019, edition: 16 }


var books = {};

Object.defineProperties(books, {
    _year: {
        value: 2004
    },

    edition: {
        value: 1
    },
    year: {
        get: function() {
            return this._year;
        },

        set: function (newValue) {
            if(newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
})

var descriptor = Object.getOwnPropertyDescriptor(books, "_year");
console.log(descriptor);
var descriptor = Object.getOwnPropertyDescriptor(books, "year");
console.log(descriptor);
var descriptor = Object.getOwnPropertyDescriptor(books, "year");
console.log(descriptor);
