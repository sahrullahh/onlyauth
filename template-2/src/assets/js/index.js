// Preloader Function
// if you want the preloader to appear longer or faster you can change the fadeTo and fadeOut values

$(window).load(function () {
  $(document).ready(function () {
    $(".preloader").fadeTo(2000, 1).fadeOut(1000);
  });
});
