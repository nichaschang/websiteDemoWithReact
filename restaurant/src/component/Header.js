import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FaUtensils,FaComment,FaShoppingCart,FaSignInAlt} from 'react-icons/fa'
import '../css/Header.scss'
import CartIcon from './CartIcon'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getMember} from '../action/index'

function Header(props) {
const [open,setOpen]=useState(false)
const [userName,setUserName]=useState('會員登入')
const [login,setLogin]=useState(true)

useEffect(() => {
    //會員狀態改變 將login為反向
    setLogin(!login)
}, [props.memberInfo])

useEffect(()=>{
    //更改會員登入欄位的文字
    if(props.memberInfo.length==1){
        //會員狀態改變代表登入成功 
        //userName文字將會更改
        props.memberInfo.map((v,i)=>{
        setUserName(v.name)
        console.log(v)
        })
    }else{
        //代表 登出 或是 尚未登入
        setUserName('會員登入')
    }

},[login])

//登入成功使用此DOM
const isLogin=(
    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Login"><FaSignInAlt className="header-icon" />{userName}</Link></li>
)

//尚未登入成功使用此DOM
const isLogout=(
    <li onClick={()=>{
        setOpen(!open)  
        props.getMember([null,null,null])
    }}><Link className="header-item" to="/Login"><FaSignInAlt className="header-icon"/>{userName}</Link></li>
)

//畫面DOM
    return (
    <>
     <div className="header-box">
            <div className="logo">
                <Link to="/">美式餐廳</Link>
            </div>
            <div className="menu">
                <span onClick={()=>setOpen(!open)} className={`${open?"menu-burger-close":"menu-burger"}`}></span>
                <ul className={` ${open?'header-items-ul':'header-items-none'}`}>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/"><FaUtensils className="header-icon" /> 餐廳特色</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Contact"><FaComment className="header-icon"/> 聯絡我們</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Product"><FaShoppingCart className="header-icon"/> 線上訂餐</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Member">Member</Link></li>
                    {/* 切換DOM */}
                    {login?isLogout:isLogin}
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Order"><CartIcon /></Link></li>
                </ul>
            </div>
        </div>
        <div className="banner-box">
            <div className="banner">
                <div className="banner-text">
                    <h1>咬一口就無法忘懷的漢堡</h1>
                    <p>七夕絕對無法錯過的好滋味</p>
                    <p><FaUtensils />美式大漢堡<FaUtensils /></p>
                </div>
            </div>
        </div>
    </>
    )
}
 
const mapStateToProps = store => {
    return {
        memberInfo:store.memberInfo,
    }
    }
    
const mapDispatchToProps = dispatch => {
return bindActionCreators(
    {
        getMember
    },
    dispatch
)
}
    export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Header