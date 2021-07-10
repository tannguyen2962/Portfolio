	
$('.imglist').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
});

var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.imglist').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.imglist').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});

