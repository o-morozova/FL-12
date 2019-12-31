function makeNumber(string) {
    let str = string.split('');
    let filteredString = str.filter(symbol => !isNaN(symbol));
    return filteredString.join('');
}
console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('123098h76gfdd'));
console.log(makeNumber('ijifjgdj'));
