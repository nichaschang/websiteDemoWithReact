import React, {useState,useEffect,useCallback}from 'react'
import {Link} from 'react-router-dom'
import '../css/main.scss'
import '../css/member.scss'
import { Formik,Field,ErrorMessage,Form} from 'formik'
import * as Yup from 'yup'
import MemberFormikName from './MemberFormikName'
import MemberFormikMobile from './MemberFormikMobile'


function MemberInfo(props){
const [name,setName]=useState('')
const [mobile,setMobile]=useState('')
const [email,setEmail]=useState('')
const [birth,setBirth]=useState('')
const [openName,setOpenName]=useState(false)
const [openMobile,setOpenMobile]=useState(false)
const [order,setOrder]=useState([])
const [cusId,setCusId]=useState('')
useEffect(()=>{
    let box=[]

    //會員資料
    props.cusInfo.map((v,i)=>{
        setCusId(v.id)
        setName(v.name)
        setEmail(v.email)
        setMobile(v.mobile)
        setBirth(v.birth)
        setOrder(v.order)
        box.push(v)
        // console.log(v.order)
    })

},[])


// 更新送出
function sendcusInfo(){
    let newObj={
        id:cusId,
        name:name,
        email:email,
        mobile:mobile,
        birth:birth,
        order:order,
    }
    console.log('newObj',newObj)
    props.updateMemberInfo(newObj)
}

// useEffect(()=>{
//     let userName={name}
//     setMemberInfo({...memberInfo,name:userName})
// },[name])

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
                        <td className="editting-td">
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
                        <td className="member-td">
                        {/* <span>{mobile}</span> */}
                        <input className="member-input" type="text" value={mobile} disabled/>
                        </td>
                        <td>
                            <button className="editting" onClick={()=>setOpenMobile(true)}>編輯</button>
                        </td>
                    </tr>
                    <tr>
                        <th><span>信箱:</span></th>
                        <td className="member-td">
                        {/* <span>{email}</span> */}
                        <input className="member-input" type="text" value={email} disabled/>
                        </td>
                        <td>
                            <span></span>
                        </td>
                    </tr>
                    
                    <tr>
                        <th><span>生日:</span></th>
                        <td className="member-td">
                        {/* <span>{birth}</span> */}
                        <input className="member-input" type="text" value={birth} disabled/>
                        </td>
                        <td>
                            <span></span>
                        </td>
                    </tr>
                </table>
            <button className="MemberInfo-btn" onClick={()=>sendcusInfo()}>更新</button>
            
                
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