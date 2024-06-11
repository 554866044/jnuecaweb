create table TAG(
	tag_id int auto_increment primary key,
    creator_id int,
    tag_name varchar(15),
    creat_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status int(1)
);