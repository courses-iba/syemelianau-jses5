/* represents a vector in two-dimensional space */
function vector(x, y) {
    this.x = x;
    this.y = y;
}

/* return a new vector that has the sum of the two vectors */
vector.prototype.plus = function (v) {
    return new vector(this.x + v.x, this.y + v.y);
};

/* return a new vector that has the difference of the two vectors */
vector.prototype.minus = function (v) {
    return new vector(this.x - v.x, this.y - v.y);
};

/* getter property length that computes the length of the vector */
Object.defineProperty(vector.prototype, 'length', {
    get: function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
});
