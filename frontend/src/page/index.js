import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'


export default function Index() {
 
  return (   
    <>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>JNURCA--你值得信赖</title>
      <meta name="description" content="JNUECA" />
      <meta name="keywords" content="交流，分享，技术，生活" />
      <link rel="icon" href="https://www.bilibili.com/favicon.ico" />
      <link rel="stylesheet" href="/static/css/index.css" />
    </Helmet>

  <div id="page-wrapper">

    <header id="header">
      <h1 id="logo">
        <a href="#">JNUECA</a>
      </h1>

      <nav id="nav">
        <ul>
          <li>
            <a href="./index.html">首页</a>
          </li>
          <li>
            <a href="/forum" onclick="a('/forum')">
              讨论板
            </a>
          </li>
          <li>
            <a href="#" onclick="a('./persional.html')">
              个人中心
            </a>
          </li>
          <li>
          <a href="/login" class="button special">登录</a>  
          </li>
        </ul>
      </nav>

 
    </header>
  </div>

  <div id="center">

    <section id="banner">
      <div className="content">
        <span className="image">
          <div className="img-content">
            <img
              src="/static/images/index&login&register/R.jpg"
              alt="这是我们"
            />
          </div>
        </span>
        <header>
          <h2>暨南大学电子商务协会论坛</h2>
          <p>
            激发成员潜能，共创电协未来
            <br />
          </p>
        </header>
      </div>
      <a href="#one" className="goto-next scrolly">
        Next
      </a>
    </section>
    <section id="one" className="spotlight style1 bottom">

      <span className="image fit main">
        <img src="/static/images/index&login&register/2.jpg" alt="关于我们" />
      </span>ages/index&&login&&register
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="4u 12u$(medium)">
              <header>
                <h2>关于我们</h2>
                <p>电协IT部</p>
              </header>
            </div>
            <div className="4u 12u$(medium)">
              <p />
              <h3>公告：</h3>
              亲爱的同学们：
              <br />
              大家好！电协 IT
              部在此向大家宣布一个好消息，我们部门专门开设了一个校园论坛，在这个论坛里，你可以：
              <br />
              !与其他同学交流学习心得和经验，共同进步。
              <br />
              !提出对学校设施和服务的建议和意见，我们会认真对待并反馈给相关部门。
              <br />
              !分享自己的技术成果和创意，展示个人才华。
              <br />
              !寻求技术支持和帮助，我们将尽力为你解答问题。
              <p />
            </div>
            <div className="4u$ 12u$(medium)">
              <p>
                为了确保论坛的良好运行，我们也制定了一些规则：
                <br />
                1.请遵守法律法规和学校规定，不得发布违法、违规或不良信息。
                <br />
                2.尊重他人的观点和意见，保持友好、和谐的交流氛围。
                <br />
                3.不得恶意攻击或骚扰其他用户。
                <br />
                我们希望这个校园论坛能够成为大家交流学习、展示才华的平台，同时也希望大家积极参与，共同建设一个积极向上、充满活力的校园
                IT 社区。
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#two" className="goto-next scrolly">
        Next
      </a>
    </section>
    <section id="two" className="spotlight style2 right">
      <span className="image fit main">
        <img src="/static/images/index&login&register/3.jpg" alt="" />
      </span>
      <div className="content">
        <header>
          <h2>留言</h2>
          <p>今天你留言了吗？？？</p>
        </header>
        <p>
          还希望大家多多投稿！
          <br />
          每天按时审核的呢！
        </p>
        <ul className="actions">
          <li>
            <a href="/forum" className="button">
              进入留言板
            </a>
          </li>
        </ul>
      </div>
      <a href="#three" className="goto-next scrolly">
        Next
      </a>
    </section>
    <section id="three" className="spotlight style3 left">
      <span className="image fit main bottom">
        <img src="/static/images/index&login&register/4.jpg" alt="" />
      </span>
      <div className="content">
        <header>
          <h2>wuhu</h2>
          <p>111111</p>
        </header>
        <p>11111111</p>
        <ul className="actions">
          <li>
            <a href=" " className="button">
              1111111
            </a>
          </li>
        </ul>
      </div>
      <a href="#four" className="goto-next scrolly">
        Next
      </a>
    </section>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>开发成员</h2>
          <p>选择你的捍卫者</p>
        </header>
        <div className="box alt">
          <div className="row uniform">
            <section className="4u 6u(medium) 12u$(xsmall)">
              <div className="fa_icon">
                <span className="icon alt major spinner_01">
                  <img
                    src="/static/images/index&login&register/kapok.jpg"
                    alt=""
                  />
                  <div className="hobby_img_info">
                    <h1>wuhu</h1>
                    <h2>超级爆肝</h2>
                  </div>
                </span>
              </div>
              <h3 style={{ textAlign: "center" }}>WUHU</h3>
              <p>全栈---我一人，即是千军万马!!!!</p>
            </section>
            <section className="4u 6u$(medium) 12u$(xsmall)">
              <div className="fa_icon">
                <span className="icon alt major spinner_02">
                  <img
                    src="/static/images/index&login&register/acg.jpg"
                    alt=""
                  />
                  <div className="hobby_img_info">
                    <h1>zsy</h1>
                    <h2>前端---</h2>
                  </div>
                </span>
              </div>
              <h3 style={{ textAlign: "center" }}></h3>
              <p></p>
            </section>
            <section className="4u$ 6u(medium) 12u$(xsmall)">
              <div className="fa_icon">
                <span className="icon alt major spinner_03">
                  <img
                    src="/static/images/index&login&register/reading.jpg"
                    alt=""
                  />
                  <div className="hobby_img_info">
                    <h1>Enid</h1>
                    <h2>追逐光，成为光！</h2>
                  </div>
                </span>
              </div>
              <h3 style={{ textAlign: "center" }}>陌默</h3>
              <p>我与成长至死方休！！</p>
            </section>
          </div>
        </div>
      </div>
    </section>
    <section id="five" className="wrapper style2 special fade">
      <div className="container">
        <header>
          <h2>联系方式</h2>
          <p>1111111</p>
        </header>
      </div>
      <p>邮箱：13316865662@163.com</p>
      <p>微信：re_wuhu</p>
    </section>

    <footer id="footer">
      <ul className="copyright">
        <li>© 2000-2023 Blue dot net All Rights Reserved</li>
        <li>
          Design: <a>JNUECA</a>
        </li>
        <div
          style={{
            textDecoration: "none",
            height: 20,
            marginTop: 20,
            lineHeight: 20,
            textAlign: "center",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img src="https://www.nanningcloud.com/Uploads/2022-10-30/bg_logo.nanningcloud.png" />
          <p
            style={{
              height: 20,
              lineHeight: 20,
              margin: "0px 0px 0px 5px",
              color: "#939393"
            }}
          >
            ICP备000000号-
          </p>
        </div>
      </ul>
    </footer>
  </div>
</>


  );}