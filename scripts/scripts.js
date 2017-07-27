$(document).ready(function(){
  if($('body').data('title')==='index'){
    console.log('index page');
    function landing(){
      $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        var oScroll = $(this).height();

        if(wScroll > $('.btn').offset().top-(.3*oScroll)){
          $('#first-item').addClass('visable-item');
        }
        if(wScroll > $('#first-item').offset().top-(.3*oScroll)){
          $('#second-item').addClass('visable-item');
        }
        if(wScroll > $('#second-item').offset().top-(.3*oScroll)){
          $('#third-item').addClass('visable-item');
        }
        if(wScroll > $('#third-item').offset().top-(.3*oScroll)){
          $('#fourth-item').addClass('visable-item');
        }

        if(wScroll > $('#main-section').offset().top){
          $('#contents').css({'position': 'fixed', 'top': '0', 'bottom': 'auto'});
        } else {
          $('#contents').css({'position': 'absolute'});
        }

        if(wScroll > $('footer').offset().top-(oScroll)){
          $('#contents').css({'position': 'absolute', 'bottom': '0', 'top':'auto'})
        }
      });
    }
    if($(window).width()>850){
      landing();
    }
    $(window).resize(function(){
      var windowwidth = $(window).width();
      if(windowwidth>850){
        landing();
        console.log('change');
      } else {
        console.log('not');
      }
    });
  }

  if($('body').data('title')==='about' || $('body').data('title')==='service'){
    console.log('what is 51?');
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      if(wScroll > $('header').offset().top){
        setTimeout(function(){
          $('.section-1 img').css({'opacity':'1'});
        }, 500);
        setTimeout(function(){
          $('.section-2 img').css({'opacity':'1'});
        }, 900);
      }
    });
  }

  if($('body').data('title')!=='contact'){
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      if(wScroll > $('.btn').offset().top){
        $('nav').addClass('change-nav');
      } else {
        $('nav').removeClass('change-nav');
        $('nav').css('transition','all 1s');
      }
    });
  }

  if($('body').data('title')==='contact'){
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      if(wScroll > $('#contact-main').offset().top){
        $('nav').addClass('change-nav');
      } else {
        $('nav').removeClass('change-nav');
        $('nav').css('transition','all 1s');
      }
    })

    $(function() {
      $('#contact-form').validator();
      $('#contact-form').on('submit', function(e) {
          if (!e.isDefaultPrevented()) {
              var url = "contact.php";
              $.ajax({
                  type: "POST",
                  url: url,
                  data: $(this).serialize(),
                  success: function(data) {
                      var messageAlert = 'alert-' + data.type;
                      var messageText = data.message;

                      var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                      if (messageAlert && messageText) {
                          $('#contact-form').find('.messages').html(alertBox);
                          $('#contact-form')[0].reset();
                      }
                  }
              });
              return false;
          }
      })
    });
  }
})
