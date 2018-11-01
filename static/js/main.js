;
// Начинать писать отсюда!!!!

$(document).ready(function(){

  ////////////// mmenu /////////////////

    var $menu = $("#my-menu").mmenu({
      "navbar": {
        "title": ""
      },
      extensions: ['theme-white', 'position-front'],
    });

      

    var $icon = $("#nav__mobile");
    var API = $menu.data( "mmenu" );
    $icon.on( "click", function() {
        API.open();
    });

    API.bind( "opened", function() {
       setTimeout(function() {
          $icon.addClass( "is-active" );
       }, 100);
       $icon.on( "click", function() {
          API.close();
       });
    });

   API.bind( "closed", function() {
      setTimeout(function() {
         $icon.removeClass( "is-active" );
      }, 100);
      $icon.on( "click", function() {
         API.open();
      });
    });

   $("#nav__mobile-menu").click(function() {
      API.close ();
    });

   ////////////// modal ///////////////////

  $(".fancybox").fancybox({
      prevEffect  : 'none',
      nextEffect  : 'none',
      helpers : {
        title : {
            type: 'outside'
        },
        thumbs  : {
            width : 50,
            height  : 50
        }
      }
    }
  );

  ////////////////// tabs ///////////////////

  $('.tabs-item').on('click', function(){

    var $this = $(this),
        item = $this.closest('.tabs-item'),
        container = $this.closest('.tabs'),
        content = container.find('.tabs__content-item'),
        ndx = item.index();

    item.addClass('active')
        .siblings()
        .removeClass('active');

    content.eq(ndx)
        .addClass('active')
        .siblings()
        .removeClass('active');
    });

	// $('.js-price__slider ').slick({
 //  speed: 300,
 //  slidesToShow: 3,
 //  slidesToScroll: 1,
 //  responsive: [
 //    {
 //      breakpoint: 1240,
 //      settings: {
 //        slidesToShow: 2,
 //        slidesToScroll: 1,
 //        nextArrow: '.price-slider__next',
 //        prevArrow: '.price-slider__prev',
 //        infinite: true
 //      }
 //    },
 //    {
 //      breakpoint: 950,
 //      settings: {
 //        slidesToShow: 1,
 //        slidesToScroll: 1, 
 //        nextArrow: '.price-slider__next',
 //        prevArrow: '.price-slider__prev'
 //      }
 //    }
 //  ]
 //  });

 //  $('.js-doing__icons').slick({
 //    speed: 300,
 //    slidesToShow: 5,
 //    slidesToScroll: 1,
 //    responsive: [
 //      {
 //        breakpoint: 950,
 //        settings: {
 //          slidesToShow: 3,
 //          slidesToScroll: 1,
 //          infinite: false
 //        }
 //      },
 //      {
 //        breakpoint: 650,
 //        settings: {
 //          slidesToShow: 2,
 //          slidesToScroll: 1,
 //          infinite: false
 //        }
 //      },
 //      {
 //        breakpoint: 500,
 //        settings: {
 //          slidesToShow: 1,
 //          slidesToScroll: 1,
 //          infinite: false
 //        }
 //      }
 //    ]
 //  });

 //  $('.js-review__slider').slick({
 //    dots: true,
 //    nextArrow: '.review-slider__next',
 //    prevArrow: '.review-slider__prev',
 //    responsive: [
 //      {
 //        breakpoint: 1150,
 //        settings: {
 //          arrows: false
 //        }
 //      }
 //    ]
 //  });

  $('.nav-mobile').click(function(){
    $(this).toggleClass('active');
    $('.main-nav__list').toggleClass('mobile-show');
  });



  $('.scroll-link').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

  $('.popup-link').magnificPopup({
    type: 'inline'
  });

});