$(function () {
  const $header = $('#header');
  const $btnTop = $('.btn-top');

  // 각 영역별 aos.js를 적용할 대상
  const $aniEl = $('[data-aos]');

  // 탑버튼이 처음에는 안 보이게
  $btnTop.hide();

  // TOP 버튼을 누르면 화면 상단으로 이동(첫번째 섹션으로 이동)
  // 버전마다 사용하는 객체 form이 다르니 확인이 필요
  $btnTop.on('click', function () {
    $.fn.fullpage.moveTo('section1');
    // $.fn.fullpage.silentMoveTo('section1');
  });

  $('#fullpage').fullpage({
    // 인디케이터 커스텀

    //  1.  사용할 요소의 이름을 지정
    menu: '.indicator',

    // 2. 앵커(영역)의 이름 설정
    anchors: ['section1', 'section2', 'section3', 'section4', 'footer'],

    // 3. 실제 링크에 data-menuanchor = "영역이름" 적용

    // *속도 조절
    scrollingSpeed: 800,

    // *섹션 영역의 콘텐츠 세로 정렬
    verticalCentered: false,

    // *슬라이더 관련
    // slidesNavigation: true,
    // slidesNavPosition: 'left',
    // slidesPerView: 3,
    // spaceBetween: 30,

    // 영역에 진입한 후
    afterLoad: function (anchorLink, index) {
      console.log('영역에 진입한 후');
      console.log(anchorLink, index);

      // 4번째 section에서 탑버튼이 보이게
      if (anchorLink === 'section4') {
        $btnTop.fadeIn();
      }

      if (anchorLink === 'section2') {
        gsap.to('.sec2-bg', {
          scale: 1,
          duration: 1.5,
          ease: 'ease-out',
        });
      }
      if (anchorLink === 'section3') {
        gsap.to('.sec3-bg', {
          scale: 1,
          duration: 1.5,
          ease: 'ease-out',
        });
      }
      if (anchorLink === 'section4') {
        gsap.to('.sec4-bg', {
          scale: 1,
          duration: 1.5,
          ease: 'ease-out',
        });
      }

      $aniEl.removeClass('aos-animate');

      // 영역에 진입하면
      AOS.init();
      $aniEl.addClass('aos-animate');
      // $(this).find('h2').addClass('aos-animate');
    },
    // 영역을 떠나갈 때
    onLeave: function (index, nextIndex, direction) {
      console.log('영역을 떠나갈 때');
      console.log(index, nextIndex, direction);

      // 밑에 영역으로 이동하면 헤더에 hide클래스 부여
      if (direction === 'down') {
        $header.addClass('hide');
      } else {
        $header.removeClass('hide');
      }
      if (index === 4 || direction === 'up') {
        $btnTop.fadeOut();
      }
    },
  });

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    autoplay: {
      delay: 2000,
    },
    loop: true,
    speed: 1000,
  });
});
