use jnueca;
create table Info(
	info_id int auto_increment primary key,
    tag_id int,
    upload_time time,
    user_id  int,
    content varchar(100)
);