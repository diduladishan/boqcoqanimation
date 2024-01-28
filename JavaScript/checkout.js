(function ($) {
  $(function () {
    var agSlideFlickity = $(".js-flickity-slider").flickity({
      autoPlay: 2000,
      imagesLoaded: true,
      percentPosition: false,
      prevNextButtons: false,
      initialIndex: 5,
      pageDots: false,
      groupCells: 1,
    });

    // Add the following line to remove the outline/border
    agSlideFlickity.css("outline", "none");

    var agCard = agSlideFlickity.find(".js-carousel-cell .js-card-bg"),
      agTransform =
        "string" == typeof document.documentElement.style.transform
          ? "transform"
          : "WebkitTransform",
      agSlide = agSlideFlickity.data("flickity");

    agSlideFlickity.on("scroll.flickity", function () {
      agSlide.slides.forEach(function (t, e) {
        var n = agCard[e],
          i = (-1 * (t.target + agSlide.x)) / 3;

        // n.style[agTransform] = "translateX(" + i + "px)";
      });
    });

    agSlideFlickity.on("click.flickity", function () {
      // Toggle autoplay on click
      agSlideFlickity.flickity("pausePlayer");
      agSlideFlickity.flickity("playPlayer");
    });

    agSlideFlickity.on("dragStart.flickity", function (t, e) {
      // Pause auto-play when dragging starts
      agSlideFlickity.flickity("stopPlayer");
    });

    agSlideFlickity.on("dragEnd.flickity", function (t, e) {
      // Resume auto-play when dragging ends
      agSlideFlickity.flickity("playPlayer");
    });

    agSlideFlickity.on("mouseenter", function () {
      // Play auto-play on hover
      agSlideFlickity.flickity("playPlayer");
    });

    agSlideFlickity.on("mouseleave", function () {
      // Pause auto-play on mouse leave
      agSlideFlickity.flickity("playPlayer");
    });
  });
})(jQuery);

// (function ($) {
//   $(function () {
//     var agSlideFlickity = $(".js-flickity-slider").flickity({
//       autoPlay: 2000,
//       imagesLoaded: true,
//       percentPosition: false,
//       prevNextButtons: false,
//       initialIndex: 5,
//       pageDots: false,
//       groupCells: 1,
//     });

//     // Add the following line to remove the outline/border
//     agSlideFlickity.css("outline", "none");

//     var agCard = agSlideFlickity.find(".js-carousel-cell .js-card-bg"),
//       agTransform =
//         "string" == typeof document.documentElement.style.transform
//           ? "transform"
//           : "WebkitTransform",
//       agSlide = agSlideFlickity.data("flickity");

//     agSlideFlickity.on("scroll.flickity", function () {
//       agSlide.slides.forEach(function (t, e) {
//         var n = agCard[e],
//           i = (-1 * (t.target + agSlide.x)) / 3;

//         n.style[agTransform] = "translateX(" + i + "px)";
//       });
//     });

//     agSlideFlickity.on("dragStart.flickity", function (t, e) {
//       document.ontouchmove = function (t) {
//         t.preventDefault();
//       };
//     });

//     agSlideFlickity.on("dragEnd.flickity", function (t, e) {
//       document.ontouchmove = function (t) {
//         return true;
//       };
//     });
//   });
// })(jQuery);

// (function ($) {
//   $(function () {
//     var agSlideFlickity = $(".js-flickity-slider").flickity({
//       autoPlay: 2000,
//       imagesLoaded: true,
//       percentPosition: false,
//       prevNextButtons: false,
//       initialIndex: 5,
//       pageDots: false,
//       groupCells: 1,
//     });

//     var agCard = agSlideFlickity.find(".js-carousel-cell .js-card-bg"),
//       agTransform =
//         "string" == typeof document.documentElement.style.transform
//           ? "transform"
//           : "WebkitTransform",
//       agSlide = agSlideFlickity.data("flickity");

//     agSlideFlickity.on("scroll.flickity", function () {
//       agSlide.slides.forEach(function (t, e) {
//         var n = agCard[e],
//           i = (-1 * (t.target + agSlide.x)) / 3;

//         n.style[agTransform] = "translateX(" + i + "px)";
//       });
//     });

//     agSlideFlickity.on("dragStart.flickity", function (t, e) {
//       document.ontouchmove = function (t) {
//         t.preventDefault();
//       };
//     });

//     agSlideFlickity.on("dragEnd.flickity", function (t, e) {
//       document.ontouchmove = function (t) {
//         return true;
//       };
//     });
//   });
// })(jQuery);
