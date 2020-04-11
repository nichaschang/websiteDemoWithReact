import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import '../css/main.scss'
import '../css/member.scss'
import MemberAside from '../component/MemberAside'
import MemberInfo from '../component/MemberInfo'
import {FaUserAlt,FaClipboardList,FaHeart,FaList} from 'react-icons/fa'
import {IoIosArrowForward} from 'react-icons/io'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getMember} from '../action/index'

function Member(props){
console.log(props)

    return (
        <>
            <div className="basic-box">
                <div className="member-box" >
                    <div style={{width:'25%'}}>
                    <MemberAside />
                    </div>
                    <div className="member-content-box">
                    <div className="member-bread">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/">
                            會員中心
                        </Link>
                        <Typography>個人資料</Typography>
                        </Breadcrumbs>
                    </div>
                        <MemberInfo cusInfo={props.memberInfo}/>
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
    export default connect(mapStateToProps, mapDispatchToProps)(Member)
// export default Member