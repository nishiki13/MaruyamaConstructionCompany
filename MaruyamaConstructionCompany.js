$(document).ready(function () {
  // ハンバーガーメニュー
  $(".burger").click(function () {
    $(".burger").toggleClass("is-active");
    $(".menu").toggleClass("is-active");
  });

  // トップの画像をスライドショー
  // $('.slider').slick({
  //   dots: true,
  //   autoplay: true
  // });

  // ページ最初に戻る
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // ボタンクリックイベントを監視
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // スムーズにスクロールする
    });
  });
});
