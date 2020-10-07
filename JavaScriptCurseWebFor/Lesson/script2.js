"use strict"
    /*
function Car(name, year) {
    this.name = name;
    this.year = year
}

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
}

let kia = new Car('Rio', 2020);
console.log(kia);

let bmw = new Car('x6', 2019);
console.log(bmw);
*/
    /*
function printObject(objName) {
    console.log('Printing object', objName);
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            console.log('[' + key + ']', this[key])
        }
    }
}

let person = {
    firstName: 'Max',
    job: 'Backend',
    age: 29,
    friends: ['Elena', 'Igor']
}

let car = {
    name: 'ford',
    model: 'Focus',
    year: 2017
}

let printPerson = printObject.bind(person);
printPerson('Person');

printObject.call(car, 'Car');

printObject.apply(person, ['Person']);

     */


/*
let a = [1,2,3];

function valueSqr(array) {
    for (let key in array) {
        if (typeof(array[key]) === 'string') {
            console.log(array[key] + array[key]);
        } else {
            console.log(Math.pow(array[key], 2));
        }
    }
}
valueSqr(a);

 */


/*
let a = [1, 2, 3];
let b = [5, 'hi', 8];

Array.prototype.double = function() {
    let newArray = this.map(function(item) {
        if (typeof item === 'string') {
            return item += item;
        } else {
            return Math.pow(item, 2);
        }
    })
    return newArray;
}

let newA = a.double();
let newB = b.double();

console.log('A', newA);
console.log('B', newB)


 */

const form = document.querySelector('form');

form.addEventListener('submit', event => {

    event.preventDefault()

    const title = form.title.value
    const text = form.text.value
    const description = form.description.value

    saveForm(title, text, description)

})

///Spread   (...data)
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data
//     }
//     console.log('From data:', formData)
// }

/// Rest
function saveForm(...args) {
    ///console.log('args', args)
    const [title, text, description] = args

    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    }
    console.log('From data:', formData)
}




















