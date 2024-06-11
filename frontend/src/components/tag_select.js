import { useState } from "react"
import HttpUtill from "../utills/HttpUtill"
import ApiUtil from "../utills/ApiUtill"
export default function Tag_select({pagenation,setter}){
    return (
        <div className="col-sm-6 col-lg-12">
            <div className="card">
              <div className="card-header pb-0 border-0">
                <h5 className="card-title mb-0">Tags</h5>
              </div>
              <div className="card-body">
                <Tag_list pagination={pagenation} setter={setter}/>
            </div>
          </div>
        </div>
    )
}
function Tag_list({pagination,setter}){
  const tags=[{keyword:'校园杂谈'},{keyword:'学习分享'},{keyword:'失物信息'},{keyword:'工作信息分享'},{keyword:'物品转卖'}]
  const row=[]
  tags.forEach((tag)=>{ row.push(
      <Draw_tag tag={tag.keyword} pagination={pagination} setter={setter}/>
    ); })
  return (<ul>{row}</ul>)
}
function Draw_tag({tag,pagination,setter}){  
  const [search,setsearch]=useState({...pagination})
  function HandleClick(){
    setsearch(
      {
        ...pagination,
        keyword:tag,
        page:1
      }
    )
    setter(search)
    }
  return(
      <li className="list-inline-item m-0">
        <button classNameName="list-inline-item m-0" onClick={HandleClick}>{tag}</button>
      </li>
  )
}
