import React, { useState, useEffect } from 'react';
import ApiUtill from '../utills/ApiUtill';
import HttpUtill from '../utills/HttpUtill';
const PostForm = () => {
    const [user, setUser] = useState({
        'islogin':false
    });
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tagId, setTagId] = useState('1');

    // 向后端请求用户登录信息
    useEffect(() => {
        // 获取用户信息
        const fetchUserInfo = async () => {
            try {
                const data = await HttpUtill.get(ApiUtill.url_login_status); // 向后端请求用户信息的接口
                
                setUser({
                    'islogin':data.islogin,
                    'id':data.id
                }); // 假设返回的数据中有一个 user 字段
            } catch (error) {
                console.error('获取用户信息失败', error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleSubmit = () => {
        // 打包用户id、title、content、tag_id，然后发送给后端
        const postData = {
            userId: user.id,
            title,
            content,
            tagId,
        };

        //发送帖子的函数
         const postToBackend = async () => {
            try {
                 const result = await HttpUtill.post(ApiUtill.url_submit_info,postData);
                 alert('帖子已发送', result);
             } catch (error) {
                 console.error('发送帖子失败', error);
             }
         };

         postToBackend();
    };

    console.log(user)
    return (
        <>
        {user.islogin === false ?<div>请先登录</div>
        :
        <div>
            <input
                type="text"
                placeholder="标题"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="内容"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <select value={tagId} onChange={(e) => setTagId(e.target.value)}>
                <option value="1">校园杂谈</option>
                <option value="2">学习分享</option>
                <option value="3">标签3</option>
                <option value="4">标签4</option>
                <option value="5">标签5</option>
            </select>
            <button onClick={handleSubmit}>提交</button>
        </div>
}
        </>
    );
};

export default PostForm;
