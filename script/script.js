$(function(){
    //gnb - 제품전체보기 hover : 서브메뉴
        $(".gnb .hover").mouseover(function(){
            $(".submenu_wrap", this).stop().fadeIn(150);
        });
        $(".gnb .hover").mouseout(function(){
            $(".submenu_wrap", this).stop().fadeOut(200);
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
    
    
    
    // 신상품 추천상품 Tab 메뉴
        $(".tab_btn li").click(function(){
            var ind = $(this).index();
            $(".tab_btn li").removeClass("active"); // remove 하면
            $(".tab_btn li").eq(ind).addClass("active"); // add 하기
            $(".item2 ul").hide();
            $(".item2 ul").eq(ind).show();
        });
    
        
    
        // adimg 이미지슬라이드 영역
        setInterval(function(){
            $(".adimg_slide").animate({left:"-1200"},700,function(){
                $(".adimg_slide li").eq(0).appendTo(".adimg_slide"); // appene'To' 지정해서 붙임
                $(".adimg_slide").css("left",0);
            })
        },3300);
    
    
    ////////////////////////////////////////
    // contents wrap 이미지 슬라이더
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
    // 좌/우 버튼
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
    }, 3500);
    
    
    ////////////////////////////////////
    // 팝업
    $('.open').click(function(){
        $('#popup').addClass('popup-open');
      });
      
      $('.close').click(function(){
        $('#popup').removeClass('popup-open');
      });
    
    
    
    
    }); // end
    