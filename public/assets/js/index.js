function initiateSlickforWrapper() {
  $(".wrapper").slick({
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    arrows: true,
    pauseOnHover: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
}

function destroySlick() {
  if ($(".wrapper").hasClass("slick-initialized")) {
    $(".wrapper").slick("destroy");
  }
}

function menuToggle() {
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("toggle");
  var btn = document.getElementById("fixed-btn-navbar");

  if (nav.className == "HalamanPenuhMenu") {
    nav.classList.add("active");
    toggle.classList.add("active");
    btn.classList.add("active");
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  } else {
    nav.classList.remove("active");
    btn.classList.remove("active");
    toggle.classList.remove("active");
    window.onscroll = function () {};
  }
}
