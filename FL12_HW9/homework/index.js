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

let resultingArray = [];
function mapArray() {
    let arrayToTransform = arguments[0];
    let numericArray = [];
    let passedFunction = arguments[1];
    for (let i = 0; i < arrayToTransform.length; i++) {
        if (typeof arrayToTransform[i] === 'string') {
            numericArray.push(parseInt(arrayToTransform[i]));
        } else {
            numericArray.push(parseInt(arrayToTransform[i]));
        }
    }
    executeforEach(numericArray, passedFunction);
    return resultingArray;
}
mapArray([2, '5', 8], function(el) {
    resultingArray.push(el + 3);
    return el + 3
});