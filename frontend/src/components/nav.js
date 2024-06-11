export default function App_nav(){
    return <Nav />
}
function Nav(){
    return (
          <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    rel="stylesheet"
    href="../../css/login.css"
  />
  <div className="contect">
    <div className="login-wrapper">
      <div className="left-img">
        <div className="glass">
          <div className="tips">
            <div className="title">JNUECA</div>
            <h3>Explore The Universe</h3>
            <span>Life isn't about waiting for the storm to pass.</span>
            <br />
            <span>The minute you think of giving up.</span>
          </div>
        </div>
      </div>
      <div className="right-login-form">
        <div className="form-wrapper">
          <form method="post">
            <h3>Login In</h3>
            <div className="input-items">
              <div className="input-tips">手机号</div>
              <input
                type="text"
                className="inputs"
                name="phone"
                placeholder="手机号注册/登录"
                id="mobile"
                oninput="checkMobile()"
                maxLength={11}
              />
              <div className="warn" id="mobileTip" />
            </div>
            <div className="input-items">
              <div className="input-tips">密码</div>
              <div className="input-inner">
                <input
                  type="text"
                  className="inputs"
                  name="password"
                  placeholder="密码"
                  id="code"
                  oninput="checkCode()"
                  maxLength={20}
                  style={{ width: "60%" }}
                />
                <div className="input-inner-btn">
                  <div className="code">
                    <a href="#" id="codeMsg" onclick="getCode()">
                      获取验证码
                    </a>
                  </div>
                </div>
              </div>
              <div className="warn" id="codeTip" />
            </div>
            <div className="register-bar">
              <span className="meet-problems">登录遇到问题？</span>
              <a href="./register" className="to-register">
                立即注册
              </a>
            </div>
            <div className="btn">
              <button className="button special" id="sub" onclick="regF()">
                登录
              </button>
            </div>
            <p className="login-tip">
              <span>
                未注册的手机验证后将自动登录。注册/登录即代表您同意并遵守
              </span>
              <a href="#">《jnueca用户服务协议》</a>
              <a href="#">《jnueca用户个人信息及隐私保护政策》</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</>
    )

}











