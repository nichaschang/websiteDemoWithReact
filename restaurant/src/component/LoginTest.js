import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from 'react-router-dom'
import '../css/Login.scss'
import '../css/home.scss'
import {MdMailOutline} from  'react-icons/md'
import {FaLock} from  'react-icons/fa'

const LoginTest = () => {

    return (
<>
  <Formik
    initialValues={{ email: '', password: '' }}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = '*必填';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = '信箱格式有誤';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
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
        <ErrorMessage name="password" component="div" />
        <p className="forget-info">忘記密碼</p>
        <div className="btn-box">
            <Link to="/" type="submit" className="registered-btn">註冊</Link>
            <Link to="/" type="submit"  className="login-btn" disabled={isSubmitting}>登入</Link>
        </div>
      </Form>
    </div>
    )}
  </Formik>
</>
    )
}
    
  

export default LoginTest;