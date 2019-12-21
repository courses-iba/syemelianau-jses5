var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) {
        return a + b;
    }

    /* returns the average age difference between mothers and children */
    return array.reduce(plus) / array.length;
}

/* age differences between mothers and children */
var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});

var differences = [];
for (var name in byName) {
    if (byName[name].mother && byName[byName[name].mother]) {
        differences.push(
            /* age difference between mother and child */
            byName[name].born - byName[byName[name].mother].born
        );
    }
}
