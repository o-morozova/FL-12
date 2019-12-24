'use strict';
let a = Number(prompt('Enter value for a', ''));
let b = Number(prompt('Enter value for b', ''));
let c = Number(prompt('Enter value for c', ''));
if (a===0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data');
} else {
    let D = b * b - 4 * a * c;
    if(D < 0) {
        console.log('no solution');
    } else if (D===0) {
        let x = - (b / (2 * a));
        console.log('x=' + Math.round(x));
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log('x1=' + Math.round(x1));
        console.log('x2=' + Math.round(x2));
    }
}