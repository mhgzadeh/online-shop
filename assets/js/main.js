// Set the date we're counting down to
var countDownDate = new Date("Sep 2, 2021 03:20:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    '<span id="day">' +
    days +
    "</span>" +
    '<span id="hours">' +
    hours +
    "</span>" +
    '<span id="minutes">' +
    minutes +
    "</span>" +
    '<span id="seconds">' +
    seconds +
    "</span>";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML =
      '<span id="day">' +
      0 +
      "</span>" +
      '<span id="hours">' +
      0 +
      "</span>" +
      '<span id="minutes">' +
      0 +
      "</span>" +
      '<span id="seconds">' +
      0 +
      "</span>";
    document
      .getElementById("after-expire")
      .setAttribute("id", "offer-expire-text");
    document.getElementById("offer-expire-text-inner-id").innerHTML =
      "Offers Have Already Been Expired";
    document.getElementById("offer-blur").style.filter = "blur(0.15rem)";
  }
}, 1000);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    slideBy: 3,
    dots: false,
    margin: 5,
    nav: true,
    responsive: {
      0: {
        items: 2,
        slideBy: 2,
      },
      400: {
        items: 3,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
        slideBy: 4,
      },
      1200: {
        items: 5,
        slideBy: 5,
      },
      1400: {
        items: 5,
        slideBy: 5,
      },
    },
  });
});
