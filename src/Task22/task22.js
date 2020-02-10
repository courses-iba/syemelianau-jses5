function buildTable(data) {
    /* function that given an array of objects
     * that all have the same set of properties,
     * builds up a DOM structure representing a table */
    var table = document.createElement('table');
    var tableHeader = document.createElement('tr');
    Object.keys(data[0]).forEach(function (cell) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(cell));
        tableHeader.appendChild(th);
    });
    table.appendChild(tableHeader);
    data.forEach(function (row) {
        var tr = document.createElement('tr');
        Object.keys(row).forEach(function (cell) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(row[cell]));
            if (typeof row[cell] === 'number') {
                td.style.textAlign = 'right';
            }
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    return table;
}
