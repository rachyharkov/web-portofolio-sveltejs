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


$(document).ready(function () {
  //SCROLL ON ANIMATION (TRIGGER ANIMATION BY ADDING CLASS)
  //(THE SHORTEST CODE EVER!)
  // $("ul").click(function () {
  //   $("#list-menu-mobile").each(function () {
  //     console.log("Congrats!!!");
  //     $(".HalamanPenuhMenu").removeClass("active");
  //     window.onscroll = function () {};
  //   });
  // });

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 100) {
      $("#fixed-btn-navbar").addClass("active");
      $("#btn-vert-nav").addClass("active");
    } else {
      $("#fixed-btn-navbar").removeClass("active");
      $("#btn-vert-nav").removeClass("active");
    }

    var t = $(this).scrollTop();
    if (t > 500) {
      $(".btn-portofolio-dl").fadeIn();
    } else {
      $(".btn-portofolio-dl").fadeOut();
    }
  });
  destroySlick();
  initiateSlickforWrapper();

});



// document.addEventListener("DOMContentLoaded", function () {
//   var page = window.location.hash.substr(1);
//   if (page == "") {
//     page = "landing";
//   }

//   loadPage(page);

//   function loadPage(page) {
//     var xhttp = new XMLHttpRequest();

//     xhttp.onloadstart = function () {
//       var loadingnya = document.getElementById("loading-ajax");
//       loadingnya.style.display = "block";
//     };

//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4) {
//         var content = document.getElementById("body-content");
//         var loadingnya = document.getElementById("loading-ajax");

//         if (this.status == 200) {
//           content.innerHTML = xhttp.responseText;
//           loadingnya.id = "loading-ajax-end";
//           destroySlick();
//           initiateSlickforWrapper();
//           $(".l-title").delay(2000).fadeIn(3000);
//           $(".l-subtitle").delay(2500).fadeIn(3500);
//           initbuttoninfo();
//           lazy();
//         } else if (this.status == 404) {
//           content.innerHTML =
//             "<p style='height: 100%; width: 100%; text-align: center; padding-top: 250px;'>Halaman yang anda cari tidak ditemukan :(</p>";
//           loadingnya.id = "loading-ajax-end";
//         } else {
//           content.innerHTML =
//             "<p style='height: 100%; width: 100%; text-align: center; padding-top: 250px;'>Ups.. Halaman yang anda inginkan tidak dapat diakses! :(</p>";
//           loadingnya.id = "loading-ajax-end";
//         }
//       }
//     };
//     xhttp.open("GET", "pages/" + page + ".php", true);
//     xhttp.send();
//   }
// });

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
