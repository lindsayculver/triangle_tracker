var equilateral = function(side1,side2,side3) {
  if ((side1 === side2) && (side1 === side3) && (side3 === side2)) {
    return true;
  } else  {
    return false;
  }
};


var isosceles = function(side1,side2,side3) {
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


$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result_equilateral = equilateral(side1, side2, side3);
    var result_isosceles = isosceles(side1, side2, side3);
    var result_scalene = scalene(side1, side2, side3);

    if (result_equilateral) {
      $(".triangle-type").text("equilateral");
    } else if (result_isosceles) {
      $(".triangle-type").text("isosceles");
    } else if (result_scalene) {
      $(".triangle-type").text("scalene");
    } else {
      $(".triangle-type").text("impossible");
    }

  $("#result").show();
  event.preventDefault();
  });

 });
