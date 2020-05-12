import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import '../css/main.scss'
import '../css/member.scss'
import MemberAside from '../component/MemberAside'
import MemberInfo from '../component/MemberInfo'
import MemeberOrder from '../component/MemeberOrder'
import FavorItem from '../component/FavorItem'
import {GoPrimitiveDot,GoTools} from 'react-icons/go'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {updateMemberData,getProductData} from '../action/index'

function Member(props){

//預設值會員類別
const [memberSort,setMemberSort]=useState('個人資料')

useEffect(()=>{
if(props.productInfo==0){
    props.getProductData()
}
},[])
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
                    {memberSort=='訂單紀錄'?(<MemeberOrder cusInfo={props.memberInfo} productInfo={props.productInfo}/>):''}
                    {/* 收藏餐點 */}
                    {memberSort=='收藏餐點'?(
                        <FavorItem cusInfo={props.memberInfo}/>):''}
                        {/* 其他 */}
                    {memberSort=='其他'?(
                        <div className="member-other-box">
                        <GoTools className="member-other-icon"/>
                        <div className="member-other-content">
                            <p>建構中</p>
                            <GoPrimitiveDot className="member-other-dot1 jump"/>
                            <GoPrimitiveDot className="member-other-dot2 jump"/>
                            <GoPrimitiveDot className="member-other-dot3 jump"/>
                        </div>
                        </div>
                    ):''}
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = store => {
    return {
        memberInfo:store.memberInfo,
        productInfo:store.productInfo
    }
    }
    
const mapDispatchToProps = dispatch => {
return bindActionCreators(
    {
        updateMemberData,getProductData
    },
    dispatch
)
}
    export default connect(mapStateToProps, mapDispatchToProps)(Member)
// export default Member