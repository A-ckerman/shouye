/**
 * index.js by wanglikai
 * 5.2 2017
 */
/***************************************  Initialize Swiper ********************************/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,

        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
});

/******************************************  header  ******************************/

    /*nav*/

    (function () {


        var links = document.querySelectorAll(".mynav a");
        function mouseenterFunc() {
            if (!this.parentNode.classList.contains("active")) {

                for(var i=0;i<links.length;i++){
                    links[i].parentNode.classList.remove("active");

                }
                this.parentNode.classList.add("active");
                this.style.opacity = "1";
            }
        }

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function (e) {
                return e.preventDefault();
            });
            links[i].addEventListener("mouseenter", mouseenterFunc);
        }

        //给li添加点击事件，并实现与页面的一一对应
        $("#topNav li").click(function(){
            swiper.slideTo($(this).index(),500);

        });
        //获取鼠标滚轮的索引值，并给到相应导航相应的li
        $(document).on('mousewheel', function(ev) {
            var page_i=swiper.activeIndex;
            switch (page_i)
            {
                case 0:
                    $("#header_index").addClass("active").siblings("li").removeClass();
                    break;
                case 1:
                    $("#header_data").addClass("active").siblings("li").removeClass();

                    break;
                case 2:
                    $("#header_adva").addClass("active").siblings("li").removeClass();
                    break;
                case 3:
                    $("#header_partner").addClass("active").siblings("li").removeClass();
                    break;
                case 4:
                    $("#header_asso").addClass("active").siblings("li").removeClass();
                    break;
            }

        });

    })();




/****************************************** banner  ******************************/

//全屏轮播
    $(function(){
        var n=0;
        var imgLength=$(".b-img a").length;
        var ctWidth=imgLength*100;
        var itemWidth=1/imgLength*100;
        $(".b-img").width(ctWidth+"%");
        $(".b-img a").width(itemWidth+"%");
        $(".b-list").width(imgLength*30);
        if(imgLength>1)
        {
            for(var i=0;i<imgLength;i++)
            {
                var listSpan=$("<span></span>")
                $(".b-list").append(listSpan);
            }
        }
        $(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
        $(".bar-right em").click(function(){
            if(n==imgLength-1)
            {
                var ctPosit=(n+1)*100;
                $(".banner").append($(".b-img").clone());
                $(".b-img:last").css("left","100%");
                $(".b-img:first").animate({"left":"-"+ctPosit+"%"},1000);
                $(".b-img:last").animate({"left":"0"},1000);
                var setTime0=setTimeout(function () {
                    $(".banner .b-img:first").remove();
                }, 1000);
                n=0;
                $(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
            }
            else
            {
                n++;
                var ctPosit=n*100;
                $(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
                $(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
            }
        })
        $(".bar-left em").click(function(){
            if(n==0)
            {
                var stPosit=imgLength*100;
                var etPosit=(imgLength-1)*100;
                $(".banner").prepend($(".b-img").clone());
                $(".b-img:first").css("left","-"+stPosit+"%");
                $(".b-img:last").animate({"left":"100%"},1000);
                $(".b-img:first").animate({"left":"-"+etPosit+"%"},1000);
                var setTime0=setTimeout(function () {
                    $(".banner .b-img:last").remove();
                }, 1000);
                n=imgLength-1;
                $(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
            }
            else
            {
                n--;
                var ctPosit=n*100;
                $(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
                $(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
            }
        })
        $(".b-list span").click(function(){
            var lsIndex=$(this).index();
            n=lsIndex;
            var ctPosit=n*100;
            $(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
            $(this).addClass("spcss").siblings("span").removeClass("spcss");
        })
        function rollEnvent(){
            if(n==imgLength-1)
            {
                var ctPosit=(n+1)*100;
                $(".banner").append($(".b-img").clone());
                $(".b-img:last").css("left","100%");
                $(".b-img:first").animate({"left":"-"+ctPosit+"%"},1000);
                $(".b-img:last").animate({"left":"0"},1000);
                var setTime0=setTimeout(function () {
                    $(".banner .b-img:first").remove();
                }, 1000);
                n=0;
                $(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
            }
            else
            {
                n++;
                var ctPosit=n*100;
                $(".b-img").animate({"left":"-"+ctPosit+"%"},1000);
                $(".b-list span:eq("+n+")").addClass("spcss").siblings("span").removeClass("spcss");
            }
        }
            var slidesetInterval=setInterval(rollEnvent,4000);
            $(".banner").hover(function(){clearInterval(slidesetInterval);},function(){slidesetInterval=setInterval(rollEnvent,4000);});
            $(".bar-left").mouseover(function(){
                $(this).css("background","");
                $(this).find("em").addClass("emcss");
            }).mouseleave(function(){
                $(this).css("background","none");
                $(this).find("em").removeClass("emcss");
            })
            $(".bar-right").mouseover(function(){
                $(this).css("background","");
                $(this).find("em").addClass("emcss");
            }).mouseleave(function(){
                $(this).css("background","none");
                $(this).find("em").removeClass("emcss");
        })

        })




