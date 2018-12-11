
function scroll() {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 660) {
        $("#search").addClass("block");
        $("#f").addClass("block1");
    } else {
        $("#search").removeClass("block");
        $("#f").removeClass("block1")
    }
    var $floors=$(".floor");
    var f=[];
    for(var i=0;i<$floors.length;i++){
        f.push($floors.eq(i));
        var $ullift=$(".ul-lift");
        var offsetTop1=f[i].offset().top;
        if(offsetTop1<=scrollTop+innerHeight/3) {
            $ullift.children(":eq("+i+")").addClass("hover").siblings().removeClass("hover")
        }
    }
    $(".ul-lift>li").click(function(){
        var $li=$(this);
        var i=$li.index();
        //获取到当前li的编号
        var offsetTop=$(".floor:eq("+i+")").offset().top;
        //当前楼层距离页面顶端的距离
        $("html").stop(true).animate({
            scrollTop:offsetTop//楼层滚动
        },500)
    })
}

window.onscroll=function(){
    scroll()
}
function task() {
    var d=document.getElementById("picban").querySelector(".show");
    d.className = "";
    var next = d.nextElementSibling;
    if (next != null)
        next.className = "show"
    else d.parentNode.children[0].className="show"
}

$(".left").click(function(){
    $(".show").hide();
    $(".show").prev().show();
    return task();
})
$(".right").click(function(){
    $(".show").hide();
    $(".show").next().show();
    return task();
})
// var lilen=$(".slider-main ul li").length
// for(var i=1;i<=lilen;i++){	//创建图片个数相对应的底部数字个数
//     var li="<li>"+i+"</li>";	//创建li标签，并插入到页面中
//     $(".num_btn").append(li);
// }
var timer=setInterval(task,4000)
picban.onmouseover=function(){
    clearInterval(timer)
}
picban.onmouseout=function(){
    timer=setInterval(task,4000)
}

$(".nav-jdvip").mouseenter(function(){
    $(".jdvip").show();
}).mouseout(function(){
    $(".jdvip").hide()
})
$(".nav-cart").mouseenter(function(){
    $(".cart").show();
}).mouseout(function(){
    $(".cart").hide()
})
$(".nav-follow").mouseenter(function(){
    $(".follow").show();
}).mouseout(function(){
    $(".follow").hide()
})
$(".nav-history").mouseenter(function(){
    $(".history").show();
}).mouseout(function(){
    $(".history").hide()
})
$(".nav-message").mouseenter(function(){
    $(".message").show();
}).mouseout(function(){
    $(".message").hide()
})
$(".nav-jimi").mouseenter(function(){
    $(".jimi").show();
}).mouseout(function(){
    $(".jimi").hide()
})
$(".nav-top").mouseenter(function(){
    $(".db").show();
}).mouseout(function(){
    $(".db").hide()
})
$(".nav-feedback").mouseenter(function(){
    $(".feedback").show();
}).mouseout(function(){
    $(".feedback").hide()
})
function info(){
    $(".item2").hover(function () {
        $("#item2").css("display", "block");
        $("#item1").css("display", "none")
    })
    $(".item1").hover(function () {
        $("#item2").css("display", "none");
        $("#item1").css("display", "block")
    })
}
info()


