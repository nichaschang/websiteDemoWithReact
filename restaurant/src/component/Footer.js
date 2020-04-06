import React from 'react'
import {FaUtensils,FaMapMarkerAlt,FaFacebookSquare} from 'react-icons/fa'
import {MdLocalPhone,MdMail} from 'react-icons/md'
import {AiFillInstagram,AiFillTwitterSquare,AiOutlineInstagram} from 'react-icons/ai'

function Footer() {
    return (
    <div className="about">
        <ul className="about-box">
            <li className="about-item">
                <h3>關於 美式餐廳</h3>
                <p>Curabitur lobortis id lorem id bibndum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.</p>
            </li>
            <li className="about-item">
            <h3>聯絡方式</h3>
                <ul className="about-content-info">
                    <li><FaMapMarkerAlt /><span>高雄市中正五路到底</span></li>
                    <li><MdLocalPhone /><span>+886 886 886</span></li>
                    <li><MdMail /><span>service@hexschool.com</span></li>
                </ul>
            </li>
            <li>
                <h3 className="restaurant-name">美式餐廳</h3>
                <div className="about-community" >
                    <AiOutlineInstagram className="icon"/>
                    <AiFillTwitterSquare className="icon"/>
                    <AiFillInstagram className="icon" />
                    <FaFacebookSquare className="icon" />
                </div>
            </li>
        </ul>
            <div className="clearfix"></div>
    </div>
    )
}

export default Footer
