function countBs(string) {
    /* uses 'countChar' function to find amount of 'B' */
    return countChar(string, 'B');
}


function countChar(string, char) {
    var count = 0;
    for (var i = 0; i < string.length; ++i) {
        if (string.charAt(i) === char) {
            ++count;
        }
    }
    /* returns a number that indicates how many
     * characters 'char' are in the string 'string' */
    return count;
}
