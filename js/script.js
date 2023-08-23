// dom (html 태그 로딩 완료 후 실행)
$(document).ready(function () {
  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [500, 1000, 1500, 2000, 3500];

  // 클래스 nav 의 li 를 찾아라
  // 저장한다. 재활용하기 위해서
  const navLis = $(".nav ul li");

  // li 에 a 태그를 클릭을 해서 스크롤을 이동
  const navLisA = $(".nav ul li a");
  // 클릭 기능 구현
  $.each(navLisA, function (index, item) {
    // item 은 a 태그를 말합니다.
    // item 을 클릭을 할 겁니다.
    // item 은 html 태그 (jQuery 용도)
    $(this).click(function (event) {
      // a 태그의 href 막기
      event.preventDefault();
      // li 의 모든 클래스 제거
      navLis.removeClass("focus-active");
      // 클릭된 li 에 focus-active 추가하기
      navLis.eq(index).addClass("focus-active");
      // 2. 클릭하면 스크롤바가 움직인다.
      $("html, body").animate(
        {
          scrollTop: sectionYpos[index],
        },
        "slow"
      );
    });
  });
});

/*

// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function () {
  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [500, 1000, 1500, 2000, 3500];
  // 클래스 nav 의 li 를 찾아라
  // li 에 포커스를 주기 위해서 js 에 보관
  // document.querySelector(".nav ul li")
  const navLis = document.querySelectorAll(".nav ul li");
  // li 에 a 태그를 클릭을 해서 스크롤을 이동
  const navLisA = document.querySelectorAll(".nav ul li a");

  // li 에 a 태그를 클릭시  li 에 focus-active 적용하기
  // 클릭 기능 구현
  // forEach ( function(배열각요소, 순서, 원본배열)    {} )
  // forEach (         (배열각요소, 순서, 원본배열) => {} ) : 일반화하다
  navLisA.forEach((item, index, arr) => {
    // item 은 a 태그를 말합니다.
    // item 을 클릭을 할 겁니다.
    item.addEventListener("click", function (event) {
      // a 태그의 기본 기능 href 를 막기
      event.preventDefault();
      // 1. 클릭하면 li 에 focus-active 적용되야한다.
      // 일단 모두 포커스 클래스 제거
      for (let i = 0; i < navLis.length; i++) {
        navLis[i].classList.remove("focus-active");
      }
      // navLis.forEach((item, index, arr) => {
      //   item.classList.remove("focus-active")
      // })
      // 하나만 포커스
      navLis[index].classList.add("focus-active");
      // 2. 클릭하면 스크롤바가 움직인다.
      window.scrollTo({
        // top: sectionYpos[index],
        behavior: "smooth",
      });
    });
  });
  // for (let i = 0; i < navLisA.length; i++){
  //   console.log(navLisA[i])
  // }
};

*/
