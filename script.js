$(function(){
    $(".gnb .hover").mouseover(function(){
        $(".submenu_wrap", this).stop().fadeIn(100);
    });
    $(".gnb .hover").mouseout(function(){
        $(".submenu_wrap", this).stop().fadeOut(100);
    });

//
    $(".open").click(function(){
        $(".fas").removeClass("fa-chevron-left").addClass("fa-chevron-right");
        $(".slide_tab").animate({right:'-40px'}, 500);
    });
    $(".close").click(function(){
        $(".fas").removeClass("fa-chevron-right").addClass("fa-chevron-left");
        $(".slide_tab").animate({right:'-320px'}, 500);
    });


    $(function(){
        setInterval(function(){
            $(".slide").animate({left:"-1200"},1000,function(){
                $(".slide li").eq(0).appendTo(".slide");
                $(".slide").css("left",0);
            });
             console.log(1);
        },3000);
    });

    //슬라이드 어사이드 메뉴 버튼
    // $(function(){
    //     $(".open").click(function(){
    //         hide("fa-chevron-left").show("fa-chevron-right");  
    //     });
    // });
});