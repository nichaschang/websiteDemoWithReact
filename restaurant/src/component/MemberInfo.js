import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import '../css/main.scss'
import '../css/member.scss'
import { Formik,Field,ErrorMessage,Form} from 'formik'
import * as Yup from 'yup'
import MemberFormikName from './MemberFormikName'
import MemberFormikMobile from './MemberFormikMobile'


function MemberInfo(props){
const [memberInfo,setMemberInfo]=useState([])
const [name,setName]=useState('')
const [mobile,setMobile]=useState('')
const [email,setEmail]=useState('')
const [birth,setBirth]=useState('')
const [openName,setOpenName]=useState(false)
const [openMobile,setOpenMobile]=useState(false)

console.log(props.cusInfo)

useEffect(()=>{
    let box=[]
    props.cusInfo.map((v,i)=>{
        setName(v.name)
        setEmail(v.email)
        setMobile(v.mobile)
        setBirth(v.birth)
        box.push(v)
    })
    setMemberInfo(box)
},[])

useEffect(()=>{
    console.log(memberInfo)
},[memberInfo])


    return (
        <>
            <div className="member-info-form">
                <table>
                    <tr>
                        <th><span>姓名:</span></th>
                        <td className="member-td">
                            <input className="member-input" type="text" value={name} disabled/>
                            {/* <span>{name}</span> */}
                            
                        </td>
                        <td>
                            <button className="editting" onClick={()=>setOpenName(true)}>編輯</button>
                            
                        {!openName?'':(<MemberFormikName 
                        openbox={openName}
                        cancel={()=>{ setOpenName(false)}}
                        editName={(e)=>setName(e)}
                        />)}
                        </td>
                    </tr>
                    <tr>
                        <th><span>電話:</span></th>
                        <td>
                        <span>{mobile}</span>
                        </td>
                        <td>
                            <button className="editting" onClick={()=>setOpenMobile(true)}>編輯</button>
                        </td>
                    </tr>
                    <tr>
                        <th><span>信箱:</span></th>
                        <td>
                        <span>{email}</span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                    </tr>
                    
                    <tr>
                        <th><span>生日:</span></th>
                        <td>
                        <span>{birth}</span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                    </tr>
                </table>
            <button className="MemberInfo-btn">更新</button>
            
                
            {!openMobile?'':(<MemberFormikMobile 
            openbox={openMobile}
            cancel={()=>{ setOpenMobile(false)}}
            editMobile={(e)=>setMobile(e)}
            />)}
           
            </div> 
        </>
    )
}

export default MemberInfo