var month = function () {
    /* module that can convert month numbers to names
     * and can convert names back to numbers */
    var names = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    return {
        name: function (number) {
            return names[number];
        },
        number: function (name) {
            return names.indexOf(name);
        }
    };
}();
