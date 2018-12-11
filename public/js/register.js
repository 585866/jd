$(function(){
  $("input.register-btn").on("blur",function(){
  var uname = $("input.uname").val();
  $.ajax({
    url:"http://localhost:3000/users/isreg",
    type:"post",
    data:{uid},
    dataType:"json",
    success:function(res){
      console.log(res);
      if(res.ok==0){
        alert("用户名已存在")
      }else{
        alert("用户名可用")
      }
    }
  })
})
  $("input.register-btn").on("click",function(){
      var uname=$("input.uname").val();
      var phone = $("input.phone").val();
      var upwd = $("input.uname").val()
      var email = $("input.email").val()
      //console.log(uname,upwd,email)
      $.ajax({
          url:"http://localhost:3000/users/reg",
          type:"post",
          data:{uname,phone,upwd,email},
          dataType:"json",
          success:function(res){
              //console.log(res);
              if(res.ok==1){
                  alert("注册成功,跳转登录页面");
                  location.href="index.html";
              }
          }
      })
  })
});