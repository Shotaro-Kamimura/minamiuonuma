//Modal
$(function() {
  $('#menu-show').click(function(){
    $('.modal-wrapper').fadeIn();
  });

  $('#menu-close').click(function(){
    $('.modal-wrapper').fadeOut();
  });
});

//changing color of icons
jQuery(window).on('scroll', function () {
    if (840 < jQuery(this).scrollTop()) {
        jQuery('.icon').addClass('change-color');
    } else {
        jQuery('.icon').removeClass('change-color');
    }
});

//movie play
$(function() {
    $('#movie1').YTPlayer();
  });

  $(function() {
      $('#movie2').YTPlayer();
    });


//scroll
    $(function() {
      // 「TOPに戻る」ボタンがクリックされた時の動きを指定します。
      $(".scroll_to_top").click(function() {
        // ページの一番上までスクロールさせます。
        $('body, html').scrollTop(0);
      });
    });
