

$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理
      },
      200: function () {
        //送信に失敗したときの処理
      }
    }
  });
  return false;
}); 

// $(document).ready(function () {

//   $('#form').submit(function (event) {
//     var formData = $('#form').serialize();
//     $.ajax({
//       url: "https://docs.google.com/forms/hogehoge",
//       data: formData,
//       type: "POST",
//       dataType: "xml",
//       statusCode: {
//         0: function () {
//           $(".end-message").slideDown();
//           $(".submit-btn").fadeOut();
//           //window.location.href = "thanks.html";
//         },
//         200: function () {
//           $(".false-message").slideDown();
//         }
//       }
//     });
//     event.preventDefault();
//   });

// });

// to-top フェードイン・アウト
$(document).ready(function () {
  // １、最初はボタンを非表示にする
  $('.to-top').hide();
  // ２、↓↓ 1280pxスクロールしたらフェードイン、フェードアウトする関数を記述
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1280) {
      $('.to-top').fadeIn("fast");
    } else {
      $('.to-top').fadeOut("fast");
    }
  })
})


  $(document).ready(function () {
    $('.drawer').drawer();
  });


  $(".openbtn1").click(function () {
    $(this).toggleClass('active');
  });

// $(function () {
    // if ($(".openbtn1").hasClass("active")
    //     ('.main').click(function () {
    //     $('.openbtn1').removeClass("active");
    //   })
    // );
// });


$(function () {
  $('.sp__nav').click(function () {
    // openクラスを持っているか確認
    if ($(this).hasClass("open")) {
      // 持っていたら削除
      $(this).removeClass("open");
    } else {
      // 持っていなかったら付与する
      $(this).addClass("open");
    }
  });
});


// ドロワーボタン
$(function () {
  // #で始まるa要素をクリックした場合に内部の処理が始まる
  $("a[href^='#']").click(function () {
    // 変数adjustに0を代入。移動先を＊＊pxずらしたいという時に使う
    var adjust = -60;
    // speed (ミリ秒)
    var speed = 300;
    // アンカーの取得値。リンク先（href）を取得してhrefという変数に代入。
    var href = $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  })
})



// -------------------------------------------------
// -------------------------------------------------

// jQueryを複数読むこむとコンフリクトが発生してしまうので、
// コンフリクトを解除する以下の式で囲む

// jQuery.noConflict();
// (function ($) {


// })(jQuery);
