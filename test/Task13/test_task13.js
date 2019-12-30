describe("test/Task13/test_task13.js", function() {

  it("new vector(1, 2).plus(new vector(2, 3)) should return vector{x: 3, y: 5}", function() {
    var tstObj = new vector(3, 5);
    expect(new vector(1, 2).plus(new vector(2, 3))).toEqual(tstObj);
  });

  it("new Vector(1, 2).minus(new Vector(2, 3)) should return Vector{x: -1, y: -1}", function() {
    var tstObj = new vector(-1, -1);
    expect(new vector(1, 2).minus(new vector(2, 3))).toEqual(tstObj);
  });

  it("new Vector(3, 4).length should return 5", function() {
    expect(new vector(3, 4).length).toEqual(5);
  });

}); 