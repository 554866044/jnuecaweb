import { useState,useEffect} from "react"
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
  return (<ul className="list-inline mb-0 d-flex flex-wrap gap-2">{row}</ul>)
}

function Draw_tag({ tag, pagination, setter }) {
  const [search, setsearch] = useState(pagination); // 直接使用 pagination 初始化

  useEffect(() => {
    setter(search); // 当 search 更新时调用 setter
  }, [search]); // 添加 search 到依赖数组

  function HandleClick() {
    const newSearch = {
      ...pagination,
      keyword: tag,
      page: 1
    };
    setsearch(newSearch); // 使用新状态更新 search
  }

  return (
    <li className="list-inline-item m-0">
      <button className="btn btn-link p-0" onClick={HandleClick}>{tag}</button> {/* 修改了 className */}
    </li>
  );
}