// Typing Animation
var typed = new Typed(".typing", {
  strings: ["full stack web developer", "graphic designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Add menu active class when scrolling to div
$(window)
  .scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $("section").each(function (i) {
        // The number at the end of the next line is how pany pixels you from the top you want it to activate.
        if ($(this).position().top <= windscroll - 0) {
          $(".verticle-menu li a.active").removeClass("active");
          $(".verticle-menu li a").eq(i).addClass("active");
        }
      });
    } else {
      $(".verticle-menu li a.active").removeClass("active");
      $(".verticle-menu li a:first").addClass("active");
    }
  })
  .scroll();
