"use strict"

// find and get element
// let div = document.querySelector('#playground');
// let p = document.querySelectorAll('.text');
// div.innerHTML = '<h2 style="color: red;"> From javascript</h2>';

// console.log(div.innerHTML);
// console.log(p);
// console.log(p[1].textContent);

// replace attribute 
// let a = document.querySelector('a');
// let oldHref = a.getAttribute('href');

// a.textContent = "Yandex";
// a.setAttribute('href', 'https://ya.ru/');

// console.log(a.getAttribute('href'));

//add class 
// let box1 = document.querySelector('#box1');
// let box2 = document.querySelector('#box2');

// box1.classList.add('red');
// box2.classList.add('blue');

// event listener
// let button = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let input = document.querySelector('input');

// function buttonHandler() {
//     console.log('click');
//     h1.textContent = input.value;
// }
// button.addEventListener('click', buttonHandler);

// h1.addEventListener('mouseenter', function() {
//     this.style.color = 'red';
//     this.style.backgroundColor = 'blue';
//     console.log('Mouse has entered h1');
// });

// h1.addEventListener('mouseleave', function() {
//     this.style.color = 'black';
//     this.style.backgroundColor = 'white';
//     console.log('Mouse has left h1');
// });

document.getElementById('wrapper').addEventListener('click', function(event) {
    console.log(event);
    let tagName = event.target.tagName.toLowerCase();

    if (tagName === 'p') {
        event.target.style.color = 'red';
    }
});
