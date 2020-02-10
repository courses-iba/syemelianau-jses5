describe("test/Task23/test_task23.js", function() {
     
  it("byTagName(document.body, 'h1').length should return 1", function() {
   expect(byTagName(document.body, "h1").length).toBeDefined();
  });

  it("byTagName(document.body, 'span').length should return 3 ", function() {
      expect(byTagName(document.body, "span").length).toBeDefined();
  });


});
