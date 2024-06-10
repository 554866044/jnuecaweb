import HttpUtill from '../utills/HttpUtill'
import ApiUtill from '../utills/ApiUtill'
import { useState } from 'react'
import Tag_select from '../components/tag_select'
import App_Info_list from '../components/info_list'

function Nav(user_data){
    return(
        <header id="header">
        <h1 id="logo"><a href="#">JNUECA</a></h1>
        <nav id="nav">
            <ul>
                <li><a href="./index.html">首页</a></li>
                <li><a href="#" onclick="a('/forum')">讨论板</a></li>
                <li><a href="#" onclick="a('./persional.html')">个人中心</a></li>
                <li><a href="/login" class="button special">登录</a></li>
            </ul>
        </nav>
    </header>
    )
}
function Info_list(info_data){
    return(
        <div></div>
    )
}

function Forum(user_data,info_data){
    return(
        <div>
            <Nav user_data={user_data}/>
            <App_Info_list info_data={info_data.info}/>
            <Tag_select/>
        </div>
    )
}
export default function App_Forum(){

    return <Forum/>
}