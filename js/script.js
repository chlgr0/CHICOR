$(document).ready(function(){
    $(".slide-box").slick({});

    $(".trend-wrap").slick({});

    
     $(".stage-wrap").slick({}); 


     
$('.item-wrap').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


});



