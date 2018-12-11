var city=$(".dropdown");
var jd=$("#drop-jd");
var user=$("#drop-user");
var web=$("#drop-web");
var set=$("#setup");
var list=$(".cate_menu_item");
var showdroplist = function(name){
    name.hover(function(){
        name.addClass("hover");
    },function(){
        name.removeClass("hover");

    });
}
showdroplist(city)
showdroplist(jd)
showdroplist(user)
showdroplist(web)
showdroplist(set)
showdroplist(list)

