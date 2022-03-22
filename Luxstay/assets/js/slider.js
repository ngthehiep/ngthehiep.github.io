$(document).ready(function(){
  // Banner
    $('.banner-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      customPaging : function(slider, i) {
        return '<span></span>';
      },
    });
    // Location
    $('.location__slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-chevron-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            centerMode: true,
          },
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            centerMode: true,
          },
        }
      ]
    });
    // Offer 
    $('.offer__list').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: true,
      customPaging : function(slider, i) {
        return '<span></span>';
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: false
          },
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
          },
        }
      ]
    });
    // Suggest
    $('.suggest__list').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-chevron-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            centerMode: true,
          },
        },
      ]
    });
    // Discover
    $('.discover__list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-chevron-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            centerMode: true,
          },
        },
      ]
    });
    // Tutorial
    $('.tutorial__list').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-chevron-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            infinite: true
          },
        },
      ]
    });
});
