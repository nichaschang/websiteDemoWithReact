import React,{useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {Link} from 'react-router-dom'
import '../css/Login.scss'
import '../css/home.scss'
import {MdMailOutline} from  'react-icons/md'
import {FaLock} from  'react-icons/fa'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getMemberData,getProductData,getDicount} from '../action/index'
import ItemCard from '../component/ItemCard'



function Login(props){

//判斷是否有點選登入按鈕
const [loginStatus,setLoginStatus]=useState()

//say Hello + 會員名稱使用
const [userName,setUserName]=useState('')

const [getRadomItem,setGetRadomItems]=useState([])
useEffect(()=>{
if(props.productInfo.length==0){
        props.getProductData() 
}
},[])
function getRandomInt(max) {
    let box=[]

    for(let i=0;i<5;i++){
        let num=Math.floor(Math.random() * Math.floor(max))
        box.push(num)
    }

    setGetRadomItems(box)
    
  }
useEffect(()=>{
    console.log('userName',userName)
    getRandomInt(props.productInfo.length)
},[userName])

useEffect(()=>{
console.log('getRadomItem',getRadomItem)
if(getRadomItem.length>0){
    props.getDicount(getRadomItem)
}
},[getRadomItem])

useEffect(() => {

    //判斷登入成功與否的地方
    if(loginStatus==true){
        if(props.memberInfo.length==1){
            
            setTimeout(()=>{
                alert('登入成功')
                props.memberInfo.map((v,i)=>{
                    setUserName(v.name)
                })
            },500)
            
        }else if(props.memberInfo.length==0){
            setTimeout(()=>{
                alert('登入失敗')
            },500)
            
        }
    }
    
}, [props.memberInfo])

// formik 驗證使用
const SigninSchema=Yup.object().shape({
    email:Yup.string()
        .required('*必填')
        .email('信箱格式有誤'),
    password:Yup.string()
        .required('請輸入密碼')
        .min(4,"密碼至少四碼")
        .max(10,'最多十碼')
})

// 登入DOM
const loginDOM=(
<Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={SigninSchema}
    onSubmit={async (values,{setSubmitting}) => {
        setLoginStatus(true)
        props.getMemberData(values)
        // alert(JSON.stringify(values))
        setSubmitting(false)
    }}
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
                <Field type="email" name="email" autoComplete="off" />
            </label>
        </div>
        <ErrorMessage name="email" component="div" style={{color:"#f00",textAlign:"left",padding:"5px"}}/>
        <div className="login-input">
            <p>Password*</p>
            <label className="input-psw">
                <FaLock  className="psw-icon" />
                <Field type="password" name="password" autoComplete="off"/>
            </label>
        </div>
        <ErrorMessage name="password" component="div"  style={{color:"#f00",textAlign:"left",padding:"5px"}}/>
        <p className="forget-info">帳號:Alex@mail.com/隨機密碼4碼以上都可登入</p>
        <div className="btn-box">
            {/* <Link to="/" className="registered-btn">註冊</Link> */}
            <button type="button" onClick={handleReset} className="login-btn">重新輸入</button>
            <button type="submit" disabled={!isValid} onClick={()=>console.log(isValid)} className="login-btn">登入</button>
        </div>
      </Form>
    </div>
    )}
  </Formik>
)
const helloDOM=(
    <div className="login-box login-boxOK">
        <p>
        {userName!==''?`Hello!${userName}`:''}
        </p>
        <p>推薦商品</p>
        <div className='flex'>
        {props.productInfo.map((v,i)=>{
                let idx=getRadomItem.findIndex(e=>e==v.id)
            if(idx!=-1){
                return (
                <ItemCard data={v} discount={v.id}/>
            )
            }
            }
        )}
        </div>
    </div>
)

    return (
<>
  {props.memberInfo.length==1?helloDOM:loginDOM}
</>
    )
}
    
  
const mapStateToProps = store => {
return {
    memberInfo:store.memberInfo,
    productInfo:store.productInfo,
}
}

const mapDispatchToProps = dispatch => {
return bindActionCreators(
    {
    getMemberData,getProductData,getDicount
    },
    dispatch
)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

// export default Login;