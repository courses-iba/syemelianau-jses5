var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) {
        return a + b;
    }

    /* counts average value */
    return array.reduce(plus) / array.length;
}

function getStatistic() {
    var result = [];
    var groups = groupBy(ancestry, function (person) {
        return Math.ceil(person.died / 100);
    });
    for (var group in groups) {
        if (groups.hasOwnProperty(group)) {
            var ages = [];
            groups[group].forEach(function (person) {
                ages.push(person.died - person.born);
            });
            result.push(group + ': ' + average(ages));
        }
    }
    /* returs the average age of the people
     * in the ancestry data set per century */
    return result;
}

function groupBy(arr, func) {
    /* returns an object that maps group names to arrays of group members */
    return arr.reduce(function (groups, object) {
        var group = func(object);
        if (groups[group]) {
            groups[group].push(object);
        } else {
            groups[group] = [object];
        }
        return groups;
    }, {});
}
