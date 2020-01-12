function convert() {
    console.log (arguments.length);
    let conversionResults = [];
    for (let i = 0; i < arguments.length; i++) {
        (typeof arguments[i] === 'string') ?
            conversionResults.push(parseInt(arguments[i])) :
            conversionResults.push('' + arguments[i]);
        }
    return conversionResults;
}
console.log (convert('1', 2, 3, '4'));