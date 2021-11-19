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
    })

    //이미지 슬라이드1
            // setInterval(function(){
            //     $(".slide").animate({left:"-1200"},1000,function(){
            //         $(".slide li").eq(0).appendTo(".slide");
            //         $(".slide").css("left",0);
            //     });
            //      console.log(1);
            // },3000);
    //이미지 슬라이드2
    setInterval(function(){
        $(".adimg_slide").animate({left:"-1200"},1000,function(){
            $(".adimg_slide li").eq(0).appendTo(".adimg_slide");
            $(".adimg_slide").css("left",0);
        });
        console.log(1);
    },3000);

    // 새 이미지 슬라이더 실험
    $('.slider-1 > .page-btns > div').click(function(){
        var $this = $(this);
        var index = $this.index();
        
        $this.addClass('active');
        $this.siblings('.active').removeClass('active');
        
        var $slider = $this.parent().parent();
        
        var $current = $slider.find(' > .slides > div.active');
        
        var $post = $slider.find(' > .slides > div').eq(index);
        
        $current.removeClass('active');
        $post.addClass('active');
    });

    // 좌/우 버튼 추가 슬라이더
    $('.slider-1 > .side-btns > div').click(function(){
        var $this = $(this);
        var $slider = $this.closest('.slider-1');
        
        var index = $this.index();
        var isLeft = index == 0;
        
        var $current = $slider.find(' > .page-btns > div.active');
        var $post;
        
        if ( isLeft ){
            $post = $current.prev();
        }
        else {
            $post = $current.next();
        };
        
        if ( $post.length == 0 ){
            if ( isLeft ){
                $post = $slider.find(' > .page-btns > div:last-child');
            }
            else {
                $post = $slider.find(' > .page-btns > div:first-child');
            }
        };    
        $post.click();
    });

    setInterval(function(){
        $('.slider-1 > .side-btns > div').eq(1).click();
    }, 3000);
});