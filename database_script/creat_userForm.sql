use jnueca;
CREATE TABLE User(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    UserName Varchar(15),
    password varchar(20) not null,
    phone char(11) not null,
    email varchar(30),
    last_login_time time ,
    account_status int(1) ,
    register_time time
);