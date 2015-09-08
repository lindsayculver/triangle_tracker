var equilateral = function(side1,side2,side3) {
 if ((side1 === side2) && (side1 === side3) && (side3 === side2)) {
  return true;
 } else  {
   return false;
 }
};


var isoceles = function(side1,side2,side3) {
 if ((side1 === side2) || (side1 === side3) || (side3 === side2)) {
  return true;
 } else {
   return false;
 }
};

var scalene = function(side1,side2,side3) {
 if ((side1 !== side2) && (side2 !== side3) && (side3 !== side1)) {
  return true;
  } else {
  return false;
 }
};
