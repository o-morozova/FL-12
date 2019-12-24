'use strict';
let a = parseInt(prompt('Enter value for side a', ''));
let b = parseInt(prompt('Enter value for b', ''));
let c = parseInt(prompt('Enter value for c', ''));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers');
} else if (a===0 || b===0 || c===0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (!(a + b > c) || !(b + c > a) || !(a + c > b)) {
    alert('Triangle doesn\'t exist');
} else {
    if (a===b && b===c && c===a) {
        console.log('Equilateral triangle');
    } else if (a === b || b ===c || c===a) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}