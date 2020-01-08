/* object that provides interface
 * that abstracts iteration over a collection of values */
function iterator(start, end) {
    this.value = start;
    this.end = end;
}

/* iterates over the sequence,
 * showing at the element values it is made up of */
iterator.prototype.next = function () {
    var value = this.value;
    this.value++;
    return value;
};

/* finds out when the end of the sequence is reached */
iterator.prototype.hasNext = function () {
    return this.value <= this.end;
};

/* returns a string with its first five elements or fewer,
 * if the sequence has fewer than five elements */
function logFive(iter) {
    var result = '';
    for (var i = 0; i < 5 && iter.hasNext(); ++i) {
        result += iter.next() + '\n';
    }
    return result;
}

function arraySeq(array) {
    this.iterator = new iterator(0, array.length - 1);
    this.array = array;
}

arraySeq.prototype.next = function () {
    return this.array[this.iterator.next()];
};

arraySeq.prototype.hasNext = function () {
    return this.iterator.hasNext();
};

function rangeSeq(from, to) {
    this.iterator = new iterator(from, to);
}

rangeSeq.prototype.next = function () {
    return this.iterator.next();
};

rangeSeq.prototype.hasNext = function () {
    return this.iterator.hasNext();
};
