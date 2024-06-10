import HttpUtill from '../utills/HttpUtill'
import ApiUtill from '../utills/ApiUtill'
import { useState } from 'react'

export default function Info_list(){//返回整体功能
    return <App_Info_list/>
}
function App_Info_list({pagenation,setter}){//功能的组装
    if(pagenation.total===0){//tag_search的结果如果没相关信息
        return(
            <div className='col-lg-8'>
                <h1>没有标签<span className='text-danger mx-2'>{pagenation.keyword}</span>相关贴子</h1>
            </div>
        )
    }else{//相关信息存在
    return(<div className='col-lg-8'>
        <data_list pagenation={pagenation} setter={setter}/>
        <bottom_nav />
    </div>
    )}//返回帖子列表和索引栏
}
function data_list({pagenation,setter}){
    return(pagenation.map(item => (
        <div class="card bg-transparent border-0">
            <div class="row g-3">
              <div class="col-4">
              </div>
              <div class="col-8">
                <a href="#" class="badge bg-danger bg-opacity-10 text-danger mb-2 fw-bold">Lifestyle</a>
                <h5><a href="blog-details.html" class="btn-link stretched-link text-reset fw-bold">Social guides the way in 2022 app performance report</a></h5>
                <div class="d-none d-sm-inline-block">
                  <p class="mb-2">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                  <a class="small text-secondary" href="#!"> <i class="bi bi-calendar-date pe-1"></i> Jan 22, 2022</a>
                </div>
              </div>
            </div>
          </div>
      )))
}
function bottom_nav(){
    return(<h1>nav_bottom</h1>)
}