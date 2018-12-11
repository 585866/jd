
function big() {
    var bbox = $("#details-img");
    var bmove = $("#mask");
    var b_img=$("#bimg");
    var bimg=$("#superImg");
    var sup=$("#superMask")
    var Msize=150,max=476-Msize;
    bbox.mouseover(function () {//鼠标移动到box上显示大图片和选框
        bimg.css("display","block");
        bmove.css("display","block");
    });
    bbox.mouseleave(function () {//鼠标移开box不显示大图片和选框
        bimg.css("display","none");
        bmove.css("display","none");
    });
   sup.mousemove(function(e){//获取鼠标位置
      var x=e.offsetX-Msize/2;
      var y=e.offsetY-Msize/2;
        if(x<0) x=0;
        else if(x>max) x=max;
        if(y<0) y=0;
        else if(y>max) y=max;
        bmove.css("left",x)
        bmove.css("top",y)
        b_img.css("left",-x)
       b_img.css("top",-y)
    })
}
big()