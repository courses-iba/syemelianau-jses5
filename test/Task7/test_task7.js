describe("test/Task7/test_task7.js", function() {

    it("arrayToList([10, 20]) should return object {value: 10, rest: {value: 20, rest: null}} ", function() {
        var testObj = {
            value: 10,
            rest: {
                value: 20,
                rest: null
            }
        };
        expect(arrayToList([10, 20])).toEqual(testObj);
    });

    it("listToArray(arrayToList([10, 20, 30])) should return array [10, 20, 30]", function() {
        expect(listToArray(arrayToList([10, 20, 30]))).toEqual( [10, 20, 30]);
    });

    it("prepend(10, prepend(20, null)) should return object {value: 10, rest: {value: 20, rest: null}}", function() {
        var testObj = {
            value: 10,
            rest: {
                value: 20,
                rest: null
            }
        };
        expect(prepend(10, prepend(20, null))).toEqual(testObj);
    });

    it("nth(arrayToList([10, 20, 30]), 1) should return  20", function() {
        expect(nth(arrayToList([10, 20, 30]), 1)).toEqual( 20);
    });

});