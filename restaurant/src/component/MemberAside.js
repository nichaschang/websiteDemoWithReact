import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import '../css/main.scss'
import '../css/member.scss'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {FaUserAlt,FaClipboardList,FaHeart,FaList} from 'react-icons/fa'

function MemberAside(props){

    return (
        <>
            <Paper  style={{height:'100%'}}>
                <MenuList>
                <p style={{background:'#000',color:'#fff',margin:0,padding:'30px 15px',textAlign:'center'}}>會員中心</p>
                <MenuItem onClick={()=>props.getsort('個人資料')}><FaUserAlt className="member-icon"/>個人資料</MenuItem>
                <MenuItem onClick={()=>props.getsort('訂單紀錄')}><FaClipboardList className="member-icon" />訂單紀錄</MenuItem>
                <MenuItem onClick={()=>props.getsort('收藏餐點')}><FaHeart className="member-icon"/>收藏餐點</MenuItem>
                <MenuItem onClick={()=>props.getsort('其他')}><FaList className="member-icon" />其他</MenuItem>
                </MenuList>
            </Paper>
        </>
    )
}

export default MemberAside