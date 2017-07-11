    var acko = {
        init: function(){
            $(".rect-1, .rect-2, .rect-3, .rect-4").css({"left":"70%"});     
            $(".animate").on("click", function(){
                $(this).parent('div').find("a.animate").toggle();
                $(this).parents('.rect').toggleClass("addRemove");                   
            });

            $(".nav li").on("click", function(){
                $(this).addClass("active").siblings().removeClass("active");
            });

            $('.nav-hamburger').click(function(){
                $(this).toggleClass('open');
                $("ul.nav").toggleClass("open-nav")
            });

            $(".my-rating-9").starRating({
                initialRating: 3.5,
                disableAfterRate: false,
                onHover: function(currentIndex, currentRating, $el){
                  $('.live-rating').text(currentIndex);
                },
                onLeave: function(currentIndex, currentRating, $el){
                  $('.live-rating').text(currentRating);
                }
            });            
        },
        tab: function(){                    
            var clickTab = $('[tab-open]');        
            $(".tab-content:first").css("display","flex");                
            clickTab.on('click', function (e) {
                var tabAttr = $(this).attr('tab-open');                        
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
                $('[tab-show="' + tabAttr + '"]').siblings().css("display","none");             
                $('[tab-show="' + tabAttr + '"]').css("display","flex");       
                e.preventDefault();
            });            
        },
        stickyHeader: function(){
            $(window).scroll(function(){
                if ($(window).scrollTop() >= 250) {
                   $('header').addClass('fixed');
                }
                else {
                   $('header').removeClass('fixed');
                }
            });
        }
    }

$(document).ready(function(){   
  acko.init();  
  acko.tab();
  acko.stickyHeader();
});