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
function Forum({pagenation,setter}){
    return(
        <div>
            <App_Info_list pagenation={pagenation} setter={setter}/>
            <Tag_select pagenation={pagenation} setter={setter}/>
        </div>
    )
}
export default function App_Forum(){
    const [pagination,setpagenation]=useState({
        keyword:'',
        page:0,
        size:20,

        pages:0,
        total:0,
        data:[]
    })  
    return <Forum pagenation={pagination} setter={setpagenation}/>
}