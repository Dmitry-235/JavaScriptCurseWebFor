"use strict"

// if text sring
// document.querySelector('button').addEventListener('click', function(event) { 
//     let value = document.querySelector('input').value;
//     localStorage.setItem('headerText', value);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let text = localStorage.getItem('headerText');
//     if (text && text.trim()) {
//         document.querySelector('h1').textContent = text;
//     } 
// });


//  if text object
document.querySelector('button').addEventListener('click', function(event) { 
    let value = document.querySelector('input').value;
    let obj = {
        text: value
    }
    
    localStorage.setItem('headerText', JSON.stringify(obj));
});

document.addEventListener('DOMContentLoaded', function() {
    let obj = {}
    try {
        obj = JSON.parse(localStorage.getItem('headerText'));
    } catch(e) {}
    
    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text;
    } 
});