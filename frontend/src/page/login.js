import {React,useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import ApiUtil from '../utills/ApiUtill';
import HttpUtill from '../utills/HttpUtill';

function LoginPage()  {
    const [phone,setphone]=useState('');
    const [password,setpassword]=useState('');
    const [user,setuser]=useState({
        islogin:false,
        userdata:{}
    });
    const handleInputphone= (e) => {
        setphone(e.target.value);
        console.log(phone)
    };
    const handleInputpassword= (e) => {
        setpassword(e.target.value);
    };
    const handleLogin = async () => {
        let user_submit={
            ...user,
            phone:phone,
            password:password
        }
        setuser(user_submit)
        console.log(user)
        try {
            const response = await HttpUtill.post(ApiUtil.url_user_login, user_submit);
            console.log(response)
            if (response.success == true) {
                
                console.log(response.message);
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (<>
    <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>JNUECA-用户登录</title>
        <link rel="stylesheet" href="/static/css/login.css"/>
    </Helmet>
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
                       
                            <h3>Login In</h3>
                            <div className="input-items">
                                <div className="input-tips">手机号</div>
                                <input
                                    type="text"                                 
                                    className="inputs"
                                    name="phone"
                                    defaultValue={phone}
                                    onClick={handleInputphone}
                                    placeholder="手机号注册/登录"
                                    id="mobile"
                                    maxLength="11"
                                />
                                <div className="warn" id="mobileTip"></div>
                            </div>
                            <div className="input-items">
                                <div className="input-tips">密码</div>
                                <div className="input-inner">
                                    <input
                                        type="text"
                                        className="inputs"
                                        defaultValue={password}
                                        onClick={handleInputpassword}
                                        name="password"
                                        placeholder="密码"
                                        id="code"
                                        maxLength="20"
                                        style={{ width: '60%' }}
                                    />
                                    <div className="input-inner-btn">
                                        <div className="code">
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="warn" id="codeTip"></div>
                            </div>
                            <div className="register-bar">
                                <span className="meet-problems">登录遇到问题？</span>
                                <a href="./register" className="to-register">
                                    立即注册
                                </a>
                            </div>
                            <div className="btn">
                                <button className="button special" id="sub" onClick={handleLogin}>
                                    登录
                                </button>
                            </div>
                            <p className="login-tip">
                                <span>未注册的手机验证后将自动登录。注册/登录即代表您同意并遵守</span>
                                <a href="#">《jnueca用户服务协议》</a>
                                <a href="#">《jnueca用户个人信息及隐私保护政策》</a>
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default LoginPage;
