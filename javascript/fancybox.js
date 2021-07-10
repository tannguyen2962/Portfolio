$( '[data-fancybox="images"]' ).fancybox({
    buttons : [
        'zoom',
        'slideShow',
        'exif',
        'thumbs',
        'close'
      ],
    infobar : false,
    caption : function( instance, item ) {
      var caption = $(this).data('caption') || '';
      
      return ( caption.length ? caption + '<br />' : '' ) + 'Image <span data-fancybox-index></span> of <span data-fancybox-count></span>';
    }
  });

  $( '[data-fancybox="text"]' ).fancybox({
    buttons : [
        'zoom',
        'slideShow',
        'exif',
        'thumbs',
        'close'
      ],
    infobar : false,
    caption : function( instance, item ) {
      var caption = $(this).data('caption') || '';
      
      return ( caption.length ? caption + '<br />' : '' ) + 'Image <span data-fancybox-index></span> of <span data-fancybox-count></span>';
    }
  });
