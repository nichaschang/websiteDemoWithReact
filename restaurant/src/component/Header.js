import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FaUtensils,FaComment,FaShoppingCart,FaSignInAlt,FaHamburger,FaLongArrowAltUp,FaUserCog} from 'react-icons/fa'
import '../css/Header.scss'
import CartIcon from './CartIcon'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getMember} from '../action/index'

function Header(props) {

// burger開關
const [open,setOpen]=useState(false)

// 判斷登入狀態
const [login,setLogin]=useState(true)

useEffect(() => {
    //會員狀態改變 將login為反向
    setLogin(!login)
}, [props.memberInfo])

//回到頂部
function goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//登入成功使用此DOM
const isLogin=(
    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Login"><FaSignInAlt className="header-icon" />會員登入</Link></li>
)

//尚未登入成功使用此DOM
const isLogout=(
    <li onClick={()=>{
        setOpen(!open)  
        props.getMember([null,null,null])
    }}><Link className="header-item" to="/Login"><FaSignInAlt className="header-icon"/>登出</Link></li>
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
                    {/* {props.memberInfo.length==1?(<li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Member">會員中心</Link></li>):''} */}
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Member"><FaUserCog className="header-icon"/>會員中心</Link></li>
                    
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
        <div className="goTop" onClick={()=>goTop()}>
            <FaLongArrowAltUp className="goTopArrow-iCon"/>
            <FaHamburger className="goTopBurger-iCon"/>
            <span>GoTop</span>
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