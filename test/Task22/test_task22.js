describe("test/Task22/test_task22.js", function() {
  
  it("buildTable(data) should return a table", function() {
    var data = [{name: "Test", height: 100, country: "Good"}]
      expect(buildTable(data)).toBeDefined();
  });

});