function makeNumber(string) {
    let str = string.split('');
    let filteredString = str.filter(symbol => !isNaN(symbol));
    return filteredString.join('');
}
function countNumbers(string) {
    let object = {};
    let newString = makeNumber(string);
    for (let symbol = 0; symbol < newString.length; symbol++) {
        let num = newString [symbol];
        object[num] = object[num] ? object [num] + 1 : 1;
    }
return object;
}
console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));
console.log(countNumbers(''));