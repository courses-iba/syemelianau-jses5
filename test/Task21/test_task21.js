describe("test/Task21/test_task21.js", function() {
     
  it("month.name(2) should return March", function() {
    expect(month.name(2)).toEqual("March");
  });

  it("month.number('November') should return 10 ", function() {
    expect(month.number("November")).toEqual(10);
  });

});