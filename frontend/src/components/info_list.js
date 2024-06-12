import HttpUtill from '../utills/HttpUtill'
import ApiUtill from '../utills/ApiUtill'
import { useState ,useEffect,jsonify} from 'react'

export default function App_Info_list({pagenation,setter,url}){//功能的组装
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
        }
        requestdata()
 },[pagenation.keyword,pagenation.size,pagenation.page])
 function Data_list({ pagination }) {
    // 渲染每个项目
    const renderCard = (item) => (<>
      <div className="card bg-transparent border-0">
        <div className="row g-3">
          <div className="col-4">
            <img className='rounded' src='/logo512.png' alt='图片帖之后实装'/>
          </div>
          <div className="col-8">
            <a href="#" className="badge bg-danger bg-opacity-10 text-danger mb-2 fw-bold">{item.keyword}</a>
            <h5><a href="blog-details.html" className="btn-link stretched-link text-reset fw-bold">{item.title}</a></h5>
            <div className="d-none d-sm-inline-block">
              <p className="mb-2">{item.content}</p>
              <a className="small text-secondary" href="#!"> <i className="bi bi-calendar-date pe-1"></i>{item.time}</a>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-4'/>
      </>
    );
    return(<div className='bg-mode p-4'> 
    <h1 className='h4 mb-4'>Tag:{pagenation.keyword}相关贴子</h1>
    {pagination.data.map(renderCard)}
    </div>   )
}
    if(pagenation.total === 0){//tag_search的结果如果没相关信息
        return(
                <h1 className='h4 mb-4'>没有标签<span className='text-danger ms-2'>{pagenation.keyword}</span>相关贴子</h1>
        )
    }
    else{
        return (
            <>
                <Data_list pagination={pagenation}/>          
            </>
        )
    } 
}
