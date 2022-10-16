$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});



function updateTimer() {
  future = Date.parse("october 30, 2022 01:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;
  if (diff < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = " یلبالالبه پابان رسید";
  }
  document.getElementById("timer").innerHTML =
    "<div>" +
    d +
    "<span>روز</span></div>" +
    "<div>" +
    h +
    "<span>ساعت</span></div>" +
    "<div>" +
    m +
    "<span>دقیقه</span></div>" +
    "<div>" +
    s +
    "<span>ثانبه</span></div>";
}
setInterval("updateTimer()", 1000);

$(".owl-carousel").owlCarousel({
  rtl: true,
  loop: false,
  margin: 0,
  slideBy:4,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
