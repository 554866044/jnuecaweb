import React, { useState, useEffect } from 'eact';

function LoginComponent() {
  const handleLogin = () => {
    setIsLoggedIn(true); // 将登录状态设置为 true
    navigate('/personal-center'); // 切换到个人中心组件的路由
  };

  return (
    <div>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}

function PersonalCenterComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // 模拟从后端获取最新留言信息
    fetch('http://your.backend.api/url')
     .then(response => response.json())
     .then(data => setMessages(data)); 
  }, []);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSaving(true);
    // 发送请求到后端服务器以保存用户名和密码
    //后端提供的用于保存用户名和密码的 API 接口
    fetch('/api/save-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }) 
    })
     .then(response => response.json())
     .then(data => {
        if (data.success) {
          // 保存成功的处理
          console.log('用户名和密码保存成功!');
        } else {
          // 保存失败的处理
          console.error('保存用户名和密码失败:', data.error);
        }
      })
     .finally(() => {
        setIsSaving(false);
      });
  };

  return (
    <div>
      {isLoggedIn? (
        <div>
          <h2>个人中心</h2>
          <input value={username} onChange={handleUsernameChange} />
          <input type="password" value={password} onChange={handlePasswordChange} />
          <button disabled={isSaving} onClick={handleSubmit}>保存</button>
          <h2>留言板</h2>
          <ul>
            {messages.map(message => (
              <li>{message}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}




function App() {
 
  return (   
    <>
    <script src="../js/jquery.min.js"></script>
    <script src="../js/jquery.scrolly.min.js"></script>
    <script src="../js/jquery.dropotron.min.js"></script>
    <script src="../js/jquery.scrollex.min.js"></script>
    <script src="../js/skel.min.js"></script>
    <script src="../js/util.js"></script>
    <script src="../js/main.js"></script>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JNURCA--你值得信赖</title>
  <meta name="description" content="JNUECA" />
  <meta name="keywords" content="交流，分享，技术，生活" />
  <link rel="icon" href="https://www.bilibili.com/favicon.ico" />
  <link rel="stylesheet" href="../css/main.css" />
  {/* Scripts */}
  <div id="page-wrapper">
    {/* Header */}
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
            <a href="#" onclick="a('/forum')">
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
  {/* 把请求到的内容加载到页面中 */}
  <div id="center">
    {/* 首页 */}
    {/* Banner */}
    <section id="banner">
      <div className="content">
        <span className="image">
          <div className="img-content">
            <img
              src="../img/R.jpg"
              alt="这是我们"
            />
          </div>
        </span>
        <header>
          <h2>暨南大学电子商务协会论坛</h2>
          <p>
            忠信笃敬
            <br />
          </p>
        </header>
      </div>
      <a href="#one" className="goto-next scrolly">
        Next
      </a>
    </section>
    {/* One */}
    <section id="one" className="spotlight style1 bottom">

      <span className="image fit main">
        <img src="../img/2.jpg" alt="关于我们" />
      </span>

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
    {/* Two */}
    <section id="two" className="spotlight style2 right">
      <span className="image fit main">
        <img src="../img/3.jpg" alt="" />
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
            <a href=" " className="button">
              进入留言板
            </a>
          </li>
        </ul>
      </div>
      <a href="#three" className="goto-next scrolly">
        Next
      </a>
    </section>
    {/* Three */}
    <section id="three" className="spotlight style3 left">
      <span className="image fit main bottom">
        <img src="../img/4.jpg" alt="" />
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
    {/* Four */}
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>1111</h2>
          <p>1111</p>
        </header>
        <div className="box alt">
          <div className="row uniform">
            <section className="4u 6u(medium) 12u$(xsmall)">
              <div className="fa_icon">
                <span className="icon alt major spinner_01">
                  <img
                    src="../img/kapok.jpg"
                    alt=""
                  />
                  <div className="hobby_img_info">
                    <h1>11</h1>
                    <h2>1111</h2>
                  </div>
                </span>
              </div>
              <h3 style={{ textAlign: "center" }}>CG</h3>
              <p>11111111111111</p>
            </section>
            <section className="4u 6u$(medium) 12u$(xsmall)">
              <div className="fa_icon">
                <span className="icon alt major spinner_02">
                  <img
                    src="../img/acg.jpg"
                    alt=""
                  />
                  <div className="hobby_img_info">
                    <h1>1111</h1>
                    <h2>111111</h2>
                  </div>
                </span>
              </div>
              <h3 style={{ textAlign: "center" }}>ACG</h3>
              <p>111111111111！</p>
            </section>
            <section className="4u$ 6u(medium) 12u$(xsmall)">
              <div className="fa_icon">
                <span className="icon alt major spinner_03">
                  <img
                    src="../img/reading.jpg"
                    alt=""
                  />
                  <div className="hobby_img_info">
                    <h1>11</h1>
                    <h2>111</h2>
                  </div>
                </span>
              </div>
              <h3 style={{ textAlign: "center" }}>111</h3>
              <p>111111111111111。</p>
            </section>
          </div>
        </div>
      </div>
    </section>
    {/* Five */}
    <section id="five" className="wrapper style2 special fade">
      <div className="container">
        <header>
          <h2>联系方式</h2>
          <p>1111111</p>
        </header>
      </div>
      <p>邮箱：QQ邮箱@QQ.com</p>
      <p>微信：QQ号</p>
    </section>
    {/* Footer */}
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
            沪ICP备000000号-
          </p>
        </div>
      </ul>
    </footer>
  </div>
  {/* 音乐播放器代码 */}
</>


  );}

export default App
