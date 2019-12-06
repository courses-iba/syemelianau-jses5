/* function, that takes two values and returns true
 * only if they are the same value or are objects with the same properties
 * whose values are also equal when compared with a recursive call */
function deepEqual(val1, val2) {
    var equal = true;
    if (val1 && typeof val1 === 'object' && val2 && typeof val2 === 'object') {
        for (var property in val1) {
            if ((val2.hasOwnProperty(property)
                && !deepEqual(val1[property], val2[property]))
                || !val2.hasOwnProperty(property)
            ) {
                /* returns false when no the same property
                 * or values are different */
                return false;
            }
        }
    } else {
        equal = val1 === val2;
    }
    /* returns true when all properties are the same with same values
     * or 'equal' if arguments are not objects */
    return equal;
}
