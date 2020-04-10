import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaUtensils,FaComment,FaShoppingCart,FaSignInAlt} from 'react-icons/fa'
import '../css/Header.scss'
import CartIcon from './CartIcon'
function Header() {
const [open,setOpen]=useState(false)

const picData=[
    "/image/header_desktop1.jpg",
    "/image/header_desktop4.jpg",
    "/image/header_desktop5.jpg",
]

    return (
    <>
        <div className="header-box">
            <div className="logo">
                <Link to="/"><img src="image/fridays logo.png"/></Link>
            </div>
            <div className="menu">
                <span onClick={()=>setOpen(!open)} className={`${open?"menu-burger-close":"menu-burger"}`}></span>
                <ul className={` ${open?'header-items-ul':'header-items-none'}`}>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/"><FaUtensils className="header-icon" /> 餐廳特色</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/"><FaComment className="header-icon"/> 聯絡我們</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Product"><FaShoppingCart className="header-icon"/> 線上訂餐</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Login"><FaSignInAlt className="header-icon"/> 會員登入</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Order"><CartIcon /></Link></li>
                </ul>
            </div>
        </div>
        
        
        <div className="banner-box">
            <div className="banner">
            <img src="/image/header_desktop1.jpg" style={{width:'100%',height:'130%'}}/>
                <div className="banner-text">
                    <h1>咬一口就無法忘懷的漢堡</h1>
                    <p>七夕絕對無法錯過的好滋味</p>
                    <p><FaUtensils />美式大漢堡<FaUtensils /></p>
                </div>
            </div>
        </div>
        {/* <div className="banner-box">
            <div className="banner">
                <div className="banner-text">
                    <h1>咬一口就無法忘懷的漢堡</h1>
                    <p>七夕絕對無法錯過的好滋味</p>
                    <p><FaUtensils />美式大漢堡<FaUtensils /></p>
                </div>
            </div>
        </div> */}
    </>
    )
}

export default Header