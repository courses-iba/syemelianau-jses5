function every(array, func) {
    for (var i = 0; i < array.length; ++i) {
        if (!func(array[i])) {
            return false;
        }
    }
    /* returns a true value only when the expressions on all sides are true */
    return true;
}

function some(array, func) {
    for(var i = 0; i < array.length; ++i) {
        if (func(array[i])) {
            return true;
        }
    }
    /* returns true only when the predicate returns
     * true for all elements of the array */
    return false;
}
