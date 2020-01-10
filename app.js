$(function() {
  $(document).scroll(function() {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// Add smooth scrolling
$("#mainNav a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;

    // Animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      1100,
      function() {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#mainNav").style.top = "0";
  } else {
    document.querySelector("#mainNav").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
};

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());
