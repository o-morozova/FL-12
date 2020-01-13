function convert() {
    let conversionResults = [];
    for (let i = 0; i < arguments.length; i++) {
        typeof arguments[i] === 'string' ?
            conversionResults.push(parseInt(arguments[i])) :
            conversionResults.push('' + arguments[i]);
        }
    return conversionResults;
}

console.log(convert('1', 2, 3, '4'));

function executeforEach() {
    let arrayToProcess = arguments[0];
    let functionForElements = arguments[1];
    for (let el = 0; el < arrayToProcess.length; el++) {
        functionForElements(arrayToProcess[el]);
    }
}

executeforEach([1,2,3], function(el) {
    console.log(el * 2)
});

let transformedArray = [];
function mapArray() {
    let arrayToTransform = arguments[0];
    let numericArray = [];
    let passedFunction = arguments[1];
    for (let i = 0; i < arrayToTransform.length; i++) {
        numericArray.push(parseInt(arrayToTransform[i]));
    }
    executeforEach(numericArray, passedFunction);
    return transformedArray;
}

mapArray([2, '5', 8], function(el) {
    transformedArray.push(el + 3);
    return el + 3
});

function filterArray(arrayToFilter, passedFunction) {
    let a = [], filteredArray = [];
    executeforEach(arrayToFilter, function(el) {
        a.push(passedFunction(el));
    });
    for (let i = 0; i < a.length; i++) {
        if (a[i]) {
            filteredArray.push(arrayToFilter[i]);
        }
    }
    return filteredArray;
}

filterArray([2, 5, 8], function(el) {
    return el % 2 === 0
});

function flipOver(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString = reversedString + str[i];
    }
    return reversedString;
}

flipOver('hey world');

function makeListFromRange(initialArray) {
    let expandedArray = [initialArray[0]];
    for(let i = initialArray[0]; i < initialArray[1]; i++) {
        let increasedNumber = expandedArray[expandedArray.length - 1] + 1;
        expandedArray.push(increasedNumber);
    }
    return expandedArray;
}

makeListFromRange([2, 7]);

function getArrayOfKeys(arrayOfObjects, key) {
    let arrayOfKeys = [];
    executeforEach(arrayOfObjects, function (el) {
        arrayOfKeys.push(el[key])
    });
    return arrayOfKeys;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

getArrayOfKeys(actors, 'name');

function substitute(arrayOfNumbers) {
    const minValue = 30;
    let newArray = [];
    mapArray(arrayOfNumbers, el => {
        let newEl = el;
        el < minValue ? newEl = '*' : el;
        newArray.push(newEl);
    });
    return newArray;
}

substitute([58, 14, 48, 2, 31, 29]);




