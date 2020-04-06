import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Login.scss'
import '../css/home.scss'
import {MdMailOutline} from  'react-icons/md'
import {FaLock} from  'react-icons/fa'
 function Login() {
    return (
        <>        
            <div className="login-box">
                <div className="clearfix"></div>
                    <div className="login-title">
                        <h1>美式餐廳</h1>
                        <h3 style={{margin:0}}>享受美食好味道</h3>
                    </div>
                    <form className="form-login">
                    <h3>Login</h3>
                    <div className="login-input">
                        <p>Email Address*</p>
                        <label className="input_mail">
                            <MdMailOutline className="mail-icon" />
                            <input type="email"/>
                        </label>
                        
                    </div>
                    <div className="login-input">
                        <p>Password*</p>
                        <label className="input-psw">
                            <FaLock  className="psw-icon" />
                            <input type="password"/>
                        </label>
                        
                    </div>
                        <p className="forget-info">忘記密碼</p>
                        <div className="btn-box">
                            <Link to="/Home" className="registered-btn">註冊</Link>
                            <Link to="/Home" className="login-btn">登入</Link>
                        </div>
                    </form>
                <div className="clearfix"></div>
            </div>
        </>
    )
}
export default Login
