import React, { useState, useEffect } from'react';
import ApiUtill from '../utills/ApiUtill';
import HttpUtill from '../utills/HttpUtill';
function SidebarMenuItem({ text, onClick }) {
  return (
    <div className="menu-item" onClick={onClick}>
      {text}
    </div>
  );
}

function Table({ id, headers, data }) {
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
            <td>{item.title || item.username}</td>
            <td>{item.author || item.iphone}</td>
            <td>{item.publishTime || item.registerTime}</td>
            <td>{item.status}</td>
            <td>
              <button onClick={() => console.log('编辑')}>编辑</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ManagementPage({pagenation,setter}) {
  const [activeTable, setActiveTable] = useState('posts');
  const [postsData, setPostsData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // 获取帖子数据
    async function Request_info_data(){
      const result=await HttpUtill.get(ApiUtill.url_admin_info_load+'?'+pagenation.keyword+'&size='+pagenation.size+'&page='+pagenation.page)
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

    // 模拟获取用户数据
    fetch('/api/users')
    .then(response => response.json())
    .then(data => setUsersData(data));
  }, [pagenation.page]);

  const handleMenuItemClick = (tableId) => {
    setActiveTable(tableId);
  };

  return (
    <div>
      <div className="sidebar">
        <SidebarMenuItem text="帖子管理" onClick={() => handleMenuItemClick('posts')} />
        <SidebarMenuItem text="用户管理" onClick={() => handleMenuItemClick('users')} />
      </div>
      <div className="content">
        {activeTable === 'posts' && (
          <Table
            id="posts-table"
            headers={['ID', '标题', '作者', '发布时间', '状态', '操作']}
            data={postsData}
          />
        )}
        {activeTable === 'users' && (
          <Table
            id="users-table"
            headers={['ID', '用户名', '手机', '注册时间', '状态', '操作']}
            data={usersData}
          />
        )}
      </div>
    </div>
  );
}

export default ManagementPage;