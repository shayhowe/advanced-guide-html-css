$(document).ready(function() {
  var cube = $(".cube");

  $("input[type=range]").change(function () {
    var degrees = $(this).val();

    cube.css("-webkit-transform", "rotate3d(1, 1, 0," + degrees + "deg)");
  });
});