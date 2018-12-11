const express = require('express');
const bodyParser = require('body-parser');
const session=require('express-session');
/*引入路由模块*/
const users=require("./routes/users");
var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret:'128位随机字符串',
    resave:false,
    saveUninitialized:true,
}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use("/users",users)
/*使用路由器来管理路由*/
