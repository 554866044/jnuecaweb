import React, { useState, useEffect } from'react';
import ApiUtill from './utills/ApiUtill'
import HttpUtill from './utills/HttpUtill'

function TableComponent() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLogin, setIsLogin] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    // 模拟获取数据
    const data=HttpUtill.get(ApiUtill.url_ebook)
    
    const mockData = [
      { id: 1, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      { id: 2, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      { id: 3, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      { id: 4, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      { id: 5, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      { id: 6, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      { id: 7, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      { id: 8, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      { id: 9, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      { id: 10, book_name: "红楼梦", auther: "曹雪芹", time: '2024-06-05', book_url: "" },
      //... 更多模拟数据
    ];
    setData(mockData);

    // 模拟获取登录状态
    setIsLogin(true);
  }, []);

  const totalPages = Math.ceil(data.length / pageSize);

  const renderTable = (page) => {
    // 计算起始索引和结束索引
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // 渲染当前页的数据
    const pageData = data.slice(startIndex, endIndex);

    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>书名</th>
            <th>作者</th>
            <th>发布时间</th>
            <th>下载</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.book_name}</td>
              <td>{row.auther}</td>
              <td>{row.time}</td>
              <td>
                {row.book_url? (
                  isLogin? (
                    <a href={row.book_url}>下载</a>
                  ) : (
                    <a href="/login">请登录后下载</a>
                  )
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderPagination = () => {
    const pagination = [];

    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <a
          key={i}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(i);
          }}
          className={currentPage === i? 'active' : ''}
        >
          {i}
        </a>
      );
    }

    return (
      <div className="pagination">
        {pagination}
      </div>
    );
  };

  return (
    <div>
      {renderTable(currentPage)}
      {renderPagination()}
    </div>
  );
}

export default TableComponent;