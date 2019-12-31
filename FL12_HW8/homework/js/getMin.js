function getMin() {
    // arguments - array with all arguments of the function
    if (arguments.length === 0) {
        return 'Function requires at least one argument'; // verifying that function has something to work with
    }
    let min = arguments[0];
    for (let argumentsIndex = 1; argumentsIndex < arguments.length; ++argumentsIndex) {
        if (arguments[argumentsIndex] < min) {
            min = arguments[argumentsIndex];
        }
    }
    console.log(min);
}
getMin(3,0,-3);