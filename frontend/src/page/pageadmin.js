import React, { useState, useEffect } from'react';
import { Helmet } from 'react-helmet';
import HttpUtill from '../utills/HttpUtill';
import ApiUtill from '../utills/ApiUtill';
import SearchPagination from '../components/searchpagnition';
function SidebarMenuItem({ text, onClick }) {
  return (
    <div className="menu-item" onClick={onClick}>
      {text}
    </div>
  );
}

function Table({id,headers,data}) {
  console.log(data)
  return (
    <table id={id}>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.keyword}</td>
            <td>{item.author}</td>
            <td>{item.create_time}</td>
            <Judge_status status={item.status}/>
            <td>
              <button onClick={() => handleStatuschange(item.id,0)}>正常化</button>
              <button onClick={()=>handleStatuschange(item.id,1)}>封禁</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
const handleStatuschange=async(id,newstatus)=>{
  const response=await HttpUtill.post(ApiUtill.url_admin_info_op,{'id':id,'newstatus':newstatus})
  if (response.success){
    alert(response.message)
    return true
  }
  else{
    alert('无法联系至服务器')
  }
}

function Judge_status({status}){
  if (status === 0){
    return(<td className='status_green'>正常</td>)}
  else{
    return(<td className='status_red'  style={{ backgroundColor: 'salmon' }}>封禁</td>)
  }
}
function ManagementPage() {
  const [pagination,setpagination]=useState({
  page:1,
  size:5,

  pages:0,
  total:0,
  data:[]})
  const[pagenationuser,setpaginationuser]=useState(
    {
      page:1,
      size:5,
    
      pages:0,
      total:0,
      data:[]}
  )
  const [activeTable, setActiveTable] = useState('posts');
  const [postsData, setPostsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    async function requestdata(){
      const infodata=await HttpUtill.get(ApiUtill.url_admin_info_op+'?'+'&size='+pagination.size+'&page='+pagination.page)
      setpagination(infodata)
      setPostsData(infodata.data)
    }
    requestdata()
    // 获取帖子数据
    // 模拟获取用户数据
    fetch('/api/users')
    .then(response => response.json())
    .then(data => setUsersData(data));
  }, [pagination.page]);


  const handleMenuItemClick = (tableId) => {
    setActiveTable(tableId);
  };
console.log(2)
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="/static/css/index.css" />
    </Helmet>
    <div>
      <div className="sidebar">
        <SidebarMenuItem text="帖子管理" onClick={() => handleMenuItemClick('posts')} />
        <SidebarMenuItem text="用户管理" onClick={() => handleMenuItemClick('users')} />
      </div>
      <div className="content">
        {activeTable === 'posts' && (
          <>
          <Table
            id="posts-table"
            headers={['ID', '标题','分类', '作者', '发布时间', '状态', '操作']}
            data={postsData}
          />
          <SearchPagination pagination={pagination} setter={setpagination}/>
          </>
          
        )}
        {activeTable === 'Users' && (
          <>
          <Table
            id="users-table"
            headers={['ID', '标题','分类', '作者', '发布时间', '状态', '操作']}
            data={postsData}
          />
          <SearchPagination pagination={pagination} setter={setpagination}/>
          </>
          
        )}
      </div>
    </div>
    </>
  );
}
export default ManagementPage;