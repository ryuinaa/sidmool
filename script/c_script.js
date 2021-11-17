$(function(){
    $(".tab_btn li").click(function(){
        var idx = $(this).index();
        $(".tab_btn li").removeClass("active");
        $(".tab_content").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").eq(idx).addClass("active");
    });
});