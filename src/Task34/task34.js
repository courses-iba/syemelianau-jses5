function execute(suggestions, field) {
    /* array of possible values available */
    var names = [], options = [];
    var select = document.createElement('select');
    for (var prop in window) {
        if (window.hasOwnProperty(prop)) {
            names.push(select.appendChild(
                options[options.push(document.createElement('option')) - 1]
            ).appendChild(document.createTextNode(prop)).wholeText);
        }
    }
    select.style.display = 'none';
    suggestions.appendChild(select).multiple = true;
    /* field where the user types */
    field.addEventListener('input', function () {
        var number = 0;
        names.forEach(function (name, i) {
            if (!name.indexOf(field.value) && field.value) {
                ++number;
                options[i].style.display = '';
            } else {
                options[i].style.display = 'none';
            }
        });
        select.style.display = number > 0 ? '' : 'none';
        select.size = number > 10 ? 10 : number;
    });
    /* the list of suggested values that shown below the field */
    select.addEventListener('click', function () {
        names.forEach(function (name, i) {
            if (options[i].selected) {
                select.style.display = 'none';
                /* replaces the text field’s current value
                 * with clicked suggestion */
                field.value = name;
                field.focus();
            }
        });
    });
}
