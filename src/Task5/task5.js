function range(start, end, step) {
    step = step || 1;
    var array = [];
    while (step > 0 ? start <= end : start >= end) {
        array.push(start);
        start += step;
    }
    /* returns an array containing some of the numbers
     * from 'start' up to (and including) 'end' */
    return array;
}

function sum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; ++i) {
        sum += array[i];
    }
    /* returns the sum of array`s elements */
    return sum;
}
