function repeat(string, times) {
    var result = '';
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

/* simple cell type */
function textCell(text) {
    this.text = text.split('\n');
}

textCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};

textCell.prototype.minHeight = function () {
    return this.text.length;
};

textCell.prototype.draw = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
};

/* cell type that wrap another cell,
 * which has at least the given width and height */
function stretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

/* returns a number indicating this cell’s minimum width */
stretchCell.prototype.minWidth = function () {
    return Math.max(this.inner.minWidth(), this.width);
};

/* returns a number indicating the minimum height this cell requires */
stretchCell.prototype.minHeight = function () {
    return Math.max(this.inner.minHeight(), this.height);
};

/* returns an array which contains a series of strings */
stretchCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height);
};
