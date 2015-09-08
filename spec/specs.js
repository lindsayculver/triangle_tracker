describe('triangleTracker', function() {
  it("is false if it is not a triangle", function() {
    expect(triangleTracker(1, 2, 8)).to.equal(false);
  });

  it("is true if it is an equilateral", function() {
    expect(triangleTracker(4,4,4)).to.equal(true);
  });

  it("is true if it is an isosceles", function() {
    expect(triangleTracker(2, 2, 4)).to.equal(true);
  });

  it("is true if it is a scalene triangle", function() )
});
