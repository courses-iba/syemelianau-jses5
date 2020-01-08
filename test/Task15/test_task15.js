describe("test/Task15/test_task15.js", function() {
     
  it("logFive(new arraySeq([1, 2])) should return '1\n2\n'", function() {
    expect(logFive(new arraySeq([1, 2]))).toEqual("1\n2\n");
  });

  it("logFive(new rangeSeq(100, 1000)) should return '100\n101\n102\n103\n104\n'", function() {
      expect(logFive(new rangeSeq(100, 1000))).toEqual("100\n101\n102\n103\n104\n");
  });

});