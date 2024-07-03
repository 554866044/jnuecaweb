-- 创建数据库
CREATE DATABASE IF NOT EXISTS jnueca;

-- 切换到创建的数据库
USE jnueca;

-- 创建用户表
CREATE TABLE IF NOT EXISTS user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    account_status INT DEFAULT 0
);

-- 创建标签表
CREATE TABLE IF NOT EXISTS tag (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(255) NOT NULL
);

-- 创建信息表
CREATE TABLE IF NOT EXISTS info (
    info_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    info_status INT DEFAULT 0,
    tag_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (tag_id) REFERENCES tag(tag_id)
);

-- 添加标签数据
INSERT INTO tag (tag_id, tag_name) VALUES 
(2, '学习分享'),
(3, '标签3'),
(4, '标签4'),
(5, '标签5'),
(1, '校园杂谈');
