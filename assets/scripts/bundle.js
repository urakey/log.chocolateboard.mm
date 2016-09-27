require('./plugins/jquery.smoothScroll');

(function($)
{
  "use strict";

  var Browser = require('./modules/Browser');
  var Hatena  = require('./modules/Hatena');

  //===========================================================================
  //  関数
  //===========================================================================

  /**
   * 初期読み込み時の実行処理まとめ
   */
  function init()
  {
    $('a[href^="#"]').smoothScroll({
      play: -40,
      duration: 500,
      easing: 'easeOutQuad',
      withHash: false
    });

    $('.Lazy').lazyload({
      effect: 'fadeIn',
      threshold: 200
    });

    //-------------------------------------------------------------------------
    // ** Hatena
    //-------------------------------------------------------------------------
    var hatena = new Hatena($('#HatenaEntries'));
  }

  //===========================================================================
  //  処理
  //===========================================================================

  /**
   * document 実行処理
   */

  $(document).ready(function(){
    init();
  });

  //===========================================================================
  //  Easing
  //===========================================================================

  /**
   * Easing: easeOutQuad
   */
  $.extend( jQuery.easing,{
    easeOutQuad: function (x, t, b, c, d) {
      return -c *(t/=d)*(t-2) + b;
    }
  });

})(jQuery);
