// dom (html 태그 로딩 완료 후 실행)
$(document).ready(function () {
    // 클래스 nav 의 li 를 찾아라
    // 저장한다. 재활용하기 위해서
    const navLis = $(".nav ul li");
  });
  // 멀티미디어 리소스 로딩 완료 후 실행
  window.onload = function () {
    // 클래스 nav 의 li 를 찾아라
    // document.querySelector(".nav ul li")
    const navLis = document.querySelectorAll(".nav ul li");
  };