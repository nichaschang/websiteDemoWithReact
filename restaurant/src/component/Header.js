import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaUtensils,FaComment,FaShoppingCart,FaSignInAlt} from 'react-icons/fa'
import '../css/Header.scss'

function Header() {
const [open,setOpen]=useState(false)


    return (
    <>
        <div className="header-box">
            <div className="logo">
                <Link to="/Home">美式餐廳</Link>
            </div>
            <div className="menu">
                <span onClick={()=>setOpen(!open)} className={`${open?"menu-burger-close":"menu-burger"}`}></span>
                <ul className={` ${open?'header-items-ul':'header-items-none'}`}>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Home"><FaUtensils className="header-icon" /> 餐廳特色</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Home"><FaComment className="header-icon"/> 聯絡我們</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Product"><FaShoppingCart className="header-icon"/> 線上訂餐</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Login"><FaSignInAlt className="header-icon"/> 會員登入</Link></li>
                    <li onClick={()=>setOpen(!open)}><Link className="header-item" to="/Home"><FaShoppingCart style={{margin:"0px 10px",width:"25px",height:"25px"}}/></Link></li>
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

export default Header