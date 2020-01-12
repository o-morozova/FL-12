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