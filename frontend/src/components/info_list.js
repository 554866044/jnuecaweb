import HttpUtill from '../utills/HttpUtill'
import ApiUtill from '../utills/ApiUtill'
import { useState ,useEffect,jsonify} from 'react'

function data_list({pagenation}){
    return(pagenation.map(item => (
        <div class="card bg-transparent border-0">
            <div class="row g-3">
              <div class="col-4">
                <img className='rounded' src='.../public/logo512.png' alt='图片帖之后实装'/>
              </div>
              <div class="col-8">
                <a href="#" class="badge bg-danger bg-opacity-10 text-danger mb-2 fw-bold">{item.keyword}</a>
                <h5><a href="blog-details.html" class="btn-link stretched-link text-reset fw-bold">{item.title}</a></h5>
                <div class="d-none d-sm-inline-block">
                  <p class="mb-2">{item.content}</p>
                  <a class="small text-secondary" href="#!"> <i class="bi bi-calendar-date pe-1"></i>{item.time}</a>
                </div>
              </div>
            </div>
          </div>
      )))
}
function bottom_nav(){
    return(<h1>nav_bottom</h1>)
}
export default function App_Info_list({pagenation,setter}){//功能的组装
    useEffect(()=>{//依赖于keyword,size,page
        async function requestdata(){
            const result=await HttpUtill.get(ApiUtill.url_tag_search+'?'+'keyword='+pagenation.keyword+'&size='+pagenation.size+'&page='+pagenation.page)
            console.log(result) 
            let paginationRusult={}

            if (result?.success){
                paginationRusult={
                    ...pagenation,
                    pages:result.content.pagenation.pages,
                    total:result.content.pagenation.total,
                    data:result.content.pagenation.pagedata
                }    
            }
            else{
                paginationRusult={
                    ...pagenation,
                    pages:0,
                    total:0,
                    data:[]
            }
            setter(paginationRusult)
        }}
        requestdata()
 },[pagenation.keyword,pagenation.size,pagenation.page])
    if(pagenation.total===0){//tag_search的结果如果没相关信息
        return(
            <div className='col-lg-8'>
                <h1>没有标签<span className='text-danger ms-2'>{pagenation.keyword}</span>相关贴子</h1>
            </div>
        )
    }else{//相关信息存在
    return(<div className='col-lg-8'>
        
    </div>
    )}//返回帖子列表和索引栏
}
