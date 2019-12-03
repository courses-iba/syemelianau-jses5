describe("test/Task3/test_task3.js", function() {

	it("isEven(50) should be true", function() {
		expect(isEven(50)).toEqual(true);
	});

	it("isEven(75) should be false ", function() {
		expect(isEven(75)).toEqual(false);
	});

	it("isEven(-1) should be false ", function() {
		expect(isEven(-1)).toEqual(false);
	});

	it("isEven(2) should be true ", function() {
		expect(isEven(2)).toEqual(true);
	});

	it("isEven(0) should be true ", function() {
		expect(isEven(0)).toEqual(true);
	});

});