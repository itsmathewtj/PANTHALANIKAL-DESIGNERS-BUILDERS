(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
})(jQuery);

window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });



   $('.service-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2500,   // auto switch every 2.5 seconds
    smartSpeed: 800,         // smooth slide speed
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    items: 1,                // show one at a time (auto-switch)
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  });
 
 
  

  $(document).ready(function () {

    // Owl Carousel
    $('.service-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      responsive: {
        0: { items: 1.2 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  
    // Modal elements
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
  
    // Open modal on button click
    $(document).on("click", ".plus-btn", function () {
      const imgSrc = $(this).data("img");
  
      modalImg.src = imgSrc;
      modal.classList.add("show");
    });
  
    // Close modal
    $(".close-modal").click(function () {
      modal.classList.remove("show");
    });
  
    // Close on clicking background
    $("#imageModal").click(function (e) {
      if (e.target === this) {
        modal.classList.remove("show");
      }
    });
  
  });
  

  $('.service-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    dots: false,
    nav: false,
    responsive: {
        0: { items: 1.2 },
        600: { items: 2.2 },
        1000: { items: 4 }
    }
});
