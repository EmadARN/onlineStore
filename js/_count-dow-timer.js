// set the date we are counting down to
var countDownDate = new Date("feb 31,2024 10:40:23").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculation for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  //'<span id="day">' + days + '</span>/' +
  // document.getElementById("demo").innerHTML = '<span id="houres">' + hours + '</span>' +'<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="houres">' +
      hours +
      "</span>" +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = ""; //اینو خالی گزاشتم تا اررور نده به تایم
    var w = document.getElementsByClassName("demos");
    for (var i = 0; i < w.length; i++) {
      w[i].innerHTML = "";
    }
    // document.getElementById("after-expire").setAttribute ("id","offer-text");
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < g.length; i++) {
      g[i].classList.add("offer-text");
    }

    // document.getElementById("offer-text-inner").innerHTML = "پیشنهاد ویژه این محصصول به پایان رسیده";
    var m = document.getElementsByClassName("offer-text-inner");
    for (var i = 0; i < m.length; i++) {
      m[i].innerHTML = "پیشنهاد ویژه این محصصول به پایان رسیده";
    }
    // document.getElementById("offer-blur").style.filter = "blur(2px)";
    var f = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < f.length; i++) {
      f[i].style.filter = "blur(2px)";
    }
  }
}, 1000);
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    items: 4,
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    autoplay: true,
    slideBy:2,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        center: false,
      },
    },
  });
});

var carousel = $(".carousel2"),
  currdeg = 0;

$(".next1").on("click", { d: "n" }, rotate);
$(".prev1").on("click", { d: "p" }, rotate);

function rotate(e) {
  if (e.data.d == "n") {
    currdeg = currdeg - 60;
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY(" + currdeg + "deg)",
    "-moz-transform": "rotateY(" + currdeg + "deg)",
    "-o-transform": "rotateY(" + currdeg + "deg)",
    transform: "rotateY(" + currdeg + "deg)",
  });
}
