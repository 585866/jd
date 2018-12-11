function tt(){
    var today=new Date().getTime();
    var hours =24-Math.floor((today%(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes =60-Math.floor((today%(1000 * 60 * 60)) / (1000 * 60));
    var seconds =60-Math.floor((today%(1000 * 60)) / 1000);
    if(seconds==60){
        seconds="00";
    }else if(seconds<10){
        seconds="0"+seconds
    }
    $(".hours").html("<span class=\"hours\">"+hours+"</span>");
    $(".minutes").html("<span class=\"minutes\">"+minutes+"</span>");
    $(".seconds").html("<span class=\"seconds\">"+seconds+"</span>");
}
tt()
setInterval(tt,1000)
