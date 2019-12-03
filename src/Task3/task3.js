function isEven(number) {
    number = Math.abs(number);
    /* returns true if number is even or false if number is odd */
    return number === 0 ? true : number === 1 ? false : isEven(number - 2);
}
