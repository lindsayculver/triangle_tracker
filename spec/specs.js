describe('triangleTracker', function() {
  it("is true if it is a triangle", function() {
    expect(triangleTracker(2,3,4)).to.equal(true);
  });

  it("is true if it is an equilateral", function() {
    expect(triangleTracker(4, 4, 4)).to.equal(true);
  });

  it("is true if it is an isosceles", function() {
    expect(triangleTracker(2, 2, 4)).to.equal(true);
  });

  it("is true if it is a scalene triangle", function() {
    expect(triangleTracker(2, 1, 3)).to.equal(true);
  });
});
