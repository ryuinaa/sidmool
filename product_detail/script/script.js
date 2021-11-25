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
  $(".gnb .hover").mouseover(function(){
      $(".submenu_wrap", this).stop().fadeIn(100);
  });
  $(".gnb .hover").mouseout(function(){
      $(".submenu_wrap", this).stop().fadeOut(100);
  });

// 오른쪽에서 열리는 어사이드 메뉴

  $("#in-out").click(function(){
    $(this).find("i:nth-of-type(1)").toggleClass("blind");
    $("#side").toggleClass("onoff");
  });
})