/* function that produces an list from a array */
function arrayToList(array) {
    var list = {
        value: array[array.length - 1],
        rest: null
    };
    for (var i = array.length - 2; i >= 0; --i) {
        list = prepend(array[i], list);
    }
    return list;
}

/* function that produces an array from a list */
function listToArray(list) {
    var array = [];
    for (var i = 0, temp; (temp = nth(list, i)) !== undefined; ++i) {
        array.push(temp);
    }
    return array;
}

/* takes an element and a list and creates a new list
 * that adds the element to the front of the input list */
function prepend(element, list) {
    return {
        value: element,
        rest: list
    };
}

/* takes a list and a number and returns the element at the given position
 * in the list, or 'undefined' when there is no such element */
function nth(list, number) {
    return list
        ? number === 0
            ? list.value
            : nth(list.rest, number - 1)
        : undefined;
}
