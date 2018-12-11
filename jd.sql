SET NAMES UTF8;
drop database if exists jd;
create database jd CHARSET=UTF8;

use jd;
drop table if exists jd_user;
create table jd_user(
	uid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	uname varchar(12),
	upwd varchar(16),
	phone varchar(16),
	email varchar(128)
);

#插入数据
INSERT INTO jd_user VALUES(1,"dingding",'123456','13757131031','theflyking@163.com');		
INSERT INTO jd_user VALUES(2,"dangdang",'123456','13588202146','bff@163.com');