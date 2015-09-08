var triangleTracker = function(side1,side2,side3) {
  if ((side1 === side2) && (side1 === side3) && (side3 === side2)) {
    return true;
  } else if ((side1 === side2) || (side1 === side3) || (side3 === side2)) {
    return true;
  } else {
    return false;
  }
};
