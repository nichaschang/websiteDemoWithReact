import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import '../css/main.scss'
import '../css/member.scss'
import MemberAside from '../component/MemberAside'
import MemberInfo from '../component/MemberInfo'
import MemeberOrder from '../component/MemeberOrder'
import {FaUserAlt,FaClipboardList,FaHeart,FaList} from 'react-icons/fa'
import {IoIosArrowForward} from 'react-icons/io'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getMember,updateMemberData} from '../action/index'

function Member(props){
console.log(props)

const [memberSort,setMemberSort]=useState('個人資料')

    return (
        <>
            <div className="basic-box">
                <div className="member-box" >
                    <div style={{width:'25%'}}>
                    <MemberAside getsort={(e)=>setMemberSort(e)}/>
                    </div>
                    <div className="member-content-box">
                    <div className="member-bread">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/">
                            會員中心
                        </Link>
                        <Typography>{memberSort}</Typography>
                        </Breadcrumbs>
                    </div>
                    {/* 會員基本資料 */}
                    {memberSort=='個人資料'?(<MemberInfo cusInfo={props.memberInfo}
                        updateMemberInfo={(e)=>props.updateMemberData(e)}
                    />):''}
                    {/* 會員訂單 */}
                    {memberSort=='訂單紀錄'?(<MemeberOrder cusInfo={props.memberInfo}/>):''}
                        
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
        getMember,updateMemberData
    },
    dispatch
)
}
    export default connect(mapStateToProps, mapDispatchToProps)(Member)
// export default Member