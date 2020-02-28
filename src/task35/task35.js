function execute(grid, next) {
    var cells = [];
    grid.appendChild(create(5));
    next.addEventListener('click', function () {
        set(generate());
    });

    /*
     * Conway’s Game of Life is a simple simulation that creates
     * artificial “life” on a grid, each cell of which is either live or not.
     * Each generation (turn), the following rules are applied:
     *  -   Any live cell with fewer than two or
     *      more than three live neighbors dies.
     *  -   Any live cell with two or three live neighbors
     *      lives on to the next generation.
     *  -   Any dead cell with exactly three
     *      live neighbors becomes a live cell.
     * A neighbor is defined as any adjacent cell,
     * including diagonally adjacent ones.
     */

    function create(size) {
        var table = document.createElement('table');
        for (var i = 0; i < size; ++i) {
            cells.push([]);
            var tr = document.createElement('tr');
            for (var j = 0; j < size; ++j) {
                var td = document.createElement('td');
                cells[i][j] = document.createElement('input');
                cells[i][j].type = 'checkbox';
                cells[i][j].checked = !!Math.round(Math.random());
                td.appendChild(cells[i][j]);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }

    function generate() {
        var field = [];
        for (var i = 0; i < cells.length; ++i) {
            field.push([]);
            for (var j = 0; j < cells[i].length; ++j) {
                var neighbors = calculate(i, j);
                var alive = cells[i][j].checked;
                var rule = [];
                rule.push(alive && (neighbors === 2 || neighbors === 3));
                rule.push(!alive && neighbors === 3);
                field[i][j] = rule[0] || rule[1];
            }
        }
        return field;
    }

    function set(field) {
        for (var i = 0; i < cells.length; ++i) {
            for (var j = 0; j < cells[i].length; ++j) {
                cells[i][j].checked = field[i][j];
            }
        }
    }

    function calculate(x, y) {
        var cell = 0;
        for (var i = -1; i < 2; ++i) {
            for (var j = -1; j < 2; ++j) {
                if (
                    !(i === 0 && j === 0) &&
                    isField(cells.length, x + i, y + j) &&
                    cells[x + i][y + j].checked === true
                ) {
                    ++cell;
                }
            }
        }
        return cell;
    }

    function isField(size, x, y) {
        return x >= 0 && y >= 0 && x < size && y < size;
    }
}
