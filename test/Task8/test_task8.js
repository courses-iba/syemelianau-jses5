describe("test/Task8/test_task8.js", function() {

  it("deepEqual(obj,obj) should return true ", function() {
    var obj = {here: {is: "an"}, object: 2};
    expect(deepEqual(obj, obj)).toEqual(true);
  });

   it("deepEqual(obj, {here: 1, object: 2}) should return false ", function() {
    var obj = {here: {is: "an"}, object: 2};
    expect(deepEqual(obj, {here: 1, object: 2})).toEqual(false);
  });

    it("deepEqual(obj, {here: {is: 'an'}, object: 2}) should return true ", function() {
    var obj = {here: {is: "an"}, object: 2};
    expect(deepEqual(obj, {here: {is: "an"}, object: 2})).toEqual(true);
  });

});