import React, { useEffect,useState } from 'react'
import {FaList,FaPencilAlt,FaTrashAlt} from  'react-icons/fa'
import {FiCheckSquare} from  'react-icons/fi'
import {IoIosArrowForward} from  'react-icons/io'
import '../css/order.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {handle_addCart,getMemberData,sendNewOrder,updateMemberData} from '../action/index'
import {handle_NewOrder} from '../util/HandleOrder'
function Order(props) {

//折扣預設值
const [discount,setDiscount]=useState(0)

//運費預設值
const [ship,setShip]=useState(100)

//總額預設值
const [total,setTotal]=useState(0)

//送出訂單
function sendOrder(){
    if(props.Cart.length>0){
        props.sendNewOrder([])
        props.updateMemberData(handle_NewOrder(props.Cart,props.memberInfo))
        alert('已送出訂單')
    }else{
        alert('購物車沒有商品')
    }
    
}

//計算總額
useEffect(()=>{
    let total=0
    props.Cart.map((v,i)=>{
        let sprice=v.price*v.count
        total+=+sprice
    })
    setTotal(total)
},[props.Cart])

//折扣用
function handleDisCount(val,price){
    console.log('val',val) //itemID
    console.log('price',price) //price
    console.log('props.discountItem',props.discountItem)
    let idx=props.discountItem.findIndex(e=>e==val)
    
    console.log('idx',idx)
    if(idx!==-1){

        return price*.95
    }else{
        return price
    }
}

    return (
        <>
            <div className="order-box">
                <div className="order-process">
                    <FaList />  STEP 1　購物清單 <IoIosArrowForward /> <FaPencilAlt />  STEP 2　填寫資料 <IoIosArrowForward /> <FiCheckSquare />  STEP 3　完成購物
                </div>
                <table className="order-content">
                    <thead>
                        <tr className="list-title">
                            <th className="pName">商品名稱</th>
                            <th>售價</th>
                            <th>數量</th>
                            <th>刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* 購物車品項 */}
                    {props.Cart.map((v,i)=>{
                        return (
                            <tr className="list-item">
                            <td>{v.itemName}</td>
                            <td>{v.price}</td>
                            <td>{v.count}</td>
                            <td onClick={()=>props.handle_addCart(v,props.Cart,false)}><FaTrashAlt /></td>
                        </tr>
                        )
                    })}
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4">
                                <ul className="list-detail">
                                    <li>
                                        金額小計＋NT
                                        <span>{total}</span>
                                    </li>
                                    <li>
                                        活動折扣－NT
                                        <span>{discount}</span>
                                    </li>
                                    <li>
                                        運送費運＋NT
                                        <span>{ship}</span>
                                    </li>
                                    <li className="final-pay">
                                        實付金額　NT
                                        <span>{total-discount+ship}</span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <button className="send-btn" onClick={()=>sendOrder()}>送出</button>
            </div>
        </>
    )
}

const mapStateToProps = store => {
    return {
      //購物車內容
      Cart: store.cart,
      memberInfo:store.memberInfo,
      productInfo:store.productInfo,
      discountItem:store.discountItem,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        handle_addCart,
        getMemberData,sendNewOrder,updateMemberData
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Order)
// export default Order