function checkIfLeapYear(year){
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
function isLeapYear() {
    let inputDate = new Date(arguments[0]).getFullYear();
    if (isNaN(inputDate)) {
        console.log('Invalid Date');
        return;
    }
    if (checkIfLeapYear(inputDate)) {
        console.log(`${inputDate} is a leap year`);
    } else {
        console.log(`${inputDate} is not a leap year`);
    }
}
isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);
