import HttpUtill from '../utills/HttpUtill'
import ApiUtill from '../utills/ApiUtill'
import { useState ,useEffect,jsonify} from 'react'

export default function App_Info_list({pagenation,setter}){//功能的组装
    useEffect(()=>{//依赖于keyword,size,page
        async function requestdata(){
            const result=await HttpUtill.get(ApiUtill.url_tag_search+'?'+'keyword='+pagenation.keyword+'&size='+pagenation.size+'&page='+pagenation.page)
            console.log(result) 
            let pagenationRusult={}

            if (result?.success){
                pagenationRusult={
                    ...pagenation,
                    pages:result.pages,
                    total:result.total,
                    data:result.data
                } 
                setter(pagenationRusult)   
            }
            else{
                pagenationRusult={
                    ...pagenation,
                    pages:0,
                    total:0,
                    data:[]
            }
        }
            console.log(pagenationRusult)
        }
        requestdata()
 },[pagenation.keyword,pagenation.size,pagenation.page])

    if(pagenation.total === 0){//tag_search的结果如果没相关信息
        return(
            <div className='col-lg-8'>
                <h1>没有标签<span className='text-danger ms-2'>{pagenation.keyword}</span>相关贴子</h1>
            </div>
        )
    }
    else{
        return (pagenation.data.map(item => (
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
}
