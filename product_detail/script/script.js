$(document).ready(function() {
    $('ul.tabs li').click(function(){
       var tab_id = $(this).attr('data-tab');
    
       $('ul.tabs li').removeClass('current');
       $('.tab-content').removeClass('current');
    
       $(this).addClass('current');
       $("#"+tab_id).addClass('current');
     })
});

$(function(){
  // gnb
  $(".gnb .hover").mouseover(function(){
      $(".submenu_wrap", this).stop().fadeIn(100);
  });
  $(".gnb .hover").mouseout(function(){
      $(".submenu_wrap", this).stop().fadeOut(100);
  });

//어사이드 슬라이드 탭메뉴
    // $(".tabopen").click(function(){
    //     $(".side").animate({right:"0"},200);
    // });
    // $(".tabclose").click(function(){
    //     $(".side").animate({right:"-300"},200);
    // });
    $("#in-out").click(function(){
      $(this).find("i:nth-of-type(1)").toggleClass("blind");
      $(".side").toggleClass("onoff");
  });

  
  //팝업창 광고 슬라이드
  setInterval(function(){
  $(".slide").animate({left:"-270"},500,function(){
      $(".slide li").eq(0).appendTo(".slide");
      $(".slide").css("left",0);
  })
  },3300);

  // adimg 이미지슬라이드 영역
  setInterval(function(){
    $(".adimg_slide").animate({left:"-1200"},700,function(){
        $(".adimg_slide li").eq(0).appendTo(".adimg_slide"); // appene'To' 지정해서 붙임
        $(".adimg_slide").css("left",0);
    })
  },3300);

  // 팝업
  $('.open').click(function(){
    $('#popup').addClass('popup-open');
  });

  $('.close').click(function(){
    $('#popup').removeClass('popup-open');
  });


  
});






  
