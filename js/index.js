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
      data : $("#srolling_img > div"),  // ????????? ?????????
      auto : true,  //?????? ?????? true , false
      width : imgWidth,  // ????????? ????????? ??????
      height : imgWidth / 1.78,  // ????????? ????????? ??????
      item_count : 1,   // ?????? ??? ????????? ???
      cache_count : 4,   // ????????? ????????? ????????? ???
      delay : 500,  // ?????? ????????? ?????????
      delay_frame : 10000, // ????????? ????????? ??????
      move : 'top', // ?????? ?????? left , right , top , down
  });

});
