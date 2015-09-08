describe('equilateral', function() {
  it("is true if it is an equilateral", function() {
    expect(equilateral(4, 4, 4)).to.equal(true);
  });
});

describe('isosceles', function() {
  it("is true if it is an isosceles", function() {
    expect(isoceles(2, 2, 4)).to.equal(true);
  });
});

describe('scalene', function() {
  it("is true if it is a scalene triangle", function() {
    expect(scalene(2, 1, 3)).to.equal(true);
  });
});
