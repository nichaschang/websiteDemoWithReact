import React,{useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from 'react-router-dom'
import '../css/Login.scss'
import '../css/home.scss'
import {MdMailOutline} from  'react-icons/md'
import {FaLock} from  'react-icons/fa'
import * as Yup from 'yup'

const SigninSchema=Yup.object().shape({
    email:Yup.string()
        .required('*必填')
        .email('信箱格式有誤'),
    password:Yup.string()
        .required('請輸入密碼')
        .oneOf(['1234'],'密碼不正確')
        .min(4,"密碼至少四碼")
        .max(8,'最多八碼')
})

const LoginTest = (props) => {


    return (
<>
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={SigninSchema}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            console.log(values)
        alert(JSON.stringify(values));
        setSubmitting(false);
      }, 500);
    }}
    
    // onSubmit={(values,{setSubmitting})=> {
    //     console.log(setSubmitting)
    //     console.log(values)
    // }}
  >
    {({ handleReset,isValid }) => (
        <div className="login-box">
                <div className="clearfix"></div>
                    <div className="login-title">
                        <h1>美式餐廳</h1>
                        <h3 style={{margin:0}}>享受美食好味道</h3>
                    </div>
      <Form className="form-login">
        <div className="login-input">
            <h3>Login</h3>
            <p>Email Address*</p>
            <label className="input_mail">
                <MdMailOutline className="mail-icon" />
                <Field type="email" name="email" />
            </label>
        </div>
        <ErrorMessage name="email" component="div" style={{color:"#f00",textAlign:"left",padding:"5px"}}/>
        <div className="login-input">
            <p>Password*</p>
            <label className="input-psw">
                <FaLock  className="psw-icon" />
                <Field type="password" name="password" />
            </label>
        </div>
        <ErrorMessage name="password" component="div"  style={{color:"#f00",textAlign:"left",padding:"5px"}}/>
        <p className="forget-info">密碼1234</p>
        <div className="btn-box">
            {/* <Link to="/" className="registered-btn">註冊</Link> */}
            <button type="button" onClick={handleReset} className="login-btn">重新輸入</button>
            <button type="submit" disabled={!isValid} className="login-btn">登入</button>
        </div>
      </Form>
    </div>
    )}
  </Formik>
</>
    )
}
    
  

export default LoginTest;