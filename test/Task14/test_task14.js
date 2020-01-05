describe("test/Task14/test_task14.js", function() {

  var sc;
  beforeEach(function() {
    // runs before all tests in this block
    sc = new stretchCell(new textCell("abc"), 1, 2);
  });

  it("sc.minWidth() should return 3", function() {
    expect(sc.minWidth()).toEqual(3);
  });

  it("sc.minHeight() should return 2", function() {
    expect(sc.minHeight()).toEqual(2);
  });

  it("sc.draw(3, 2) should return ['abc', ''   '']", function() {
    expect(sc.draw(3, 2)).toEqual(["abc", "   "]);
  });


});
