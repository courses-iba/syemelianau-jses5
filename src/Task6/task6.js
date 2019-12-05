function reverseArray(array) {
    /* takes an array as argument and produces a new array
     * that has the same elements in the inverse order */
    var result = [];
    for (var i = array.length - 1; i >= 0; --i) {
        result.push(array[i]);
    }
    return result;
}

function reverseArrayInPlace(array) {
    /* modifies the array given as argument in order to reverse its elements */
    for (var i = 0, temp; i < array.length / 2; ++i) {
        temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
}
