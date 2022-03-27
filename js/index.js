$(function () {
  let header = document.querySelector("#header");
  let headerHeight = header.offsetHeight;

  window.onscroll = function () {
    let windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };
});


(function($){
  $(window).on("load",function(){
    $(".snb a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector:".snb a"
    });

    $("a[rel='next']").click(function(e){
      e.preventDefault();
      var to=$(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo",to);
    });
  });
})(jQuery);


$(function () {
  $(".snb>ol>li>a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    return false;
  });
});

//FAQ Accordion
$(".que").click(function () {
  if ($(this).next(".anw").is(":visible")) {
    $(this).next(".anw").stop().slideUp(300);
  } else {
    $(".anw").stop().slideUp(300);
    $(this).next(".anw").stop().slideDown(300);
  }
});

window.counter = function () {
  // this refers to the html element with the data-scroll-showCallback tag
  var span = this.querySelector("span");
  var current = parseInt(span.textContent);

  span.textContent = current + 1;
};

document.addEventListener("DOMContentLoaded", function () {
  var trigger = new ScrollTrigger({
    addHeight: true,
  });
});


$(function () {
  let imgWidth = $('#Introduction .imgarea').outerWidth();
  let imgheight = $('#Introduction .imgarea > div').outerHeight();
  $('#srolling').css("width", imgWidth );
  $('#srolling').css("height", imgWidth / 1.78 );
  $('#Introduction .imgarea').css("height", imgheight );

  $( window ).resize(function() {
    let imgWidth = $('#Introduction .imgarea').outerWidth();
    let imgheight = $('#Introduction .imgarea > div').outerHeight();
    $('#srolling').css("width", imgWidth );
    $('#srolling').css("height", imgWidth / 1.78 );
    $('#Introduction .imgarea').css("height", imgheight );
  });

  jQuery("#srolling").srolling({
      data : $("#srolling_img > div"),  // 노출될 아이템
      auto : true,  //자동 롤링 true , false
      width : imgWidth,  // 노출될 아이템 크기
      height : imgWidth / 1.78,  // 노출될 아이템 크기
      item_count : 1,   // 이동 될 아이템 수
      cache_count : 4,   // 임시로 불러올 아이템 수
      delay : 500,  // 이동 아이템 딜레이
      delay_frame : 10000, // 아이템 흐르는 속도
      move : 'top', // 이동 방향 left , right , top , down
  });

});
