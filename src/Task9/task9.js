function flatter(array) {
    /* returns an array of arrays into a single array
     * that has all the elements of the input arrays */
    return array.reduce(function (result, item) {
        return result.concat(item);
    });
}
