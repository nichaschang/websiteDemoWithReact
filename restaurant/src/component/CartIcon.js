import React ,{useState,useEffect} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import '../css/CartIcon.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {handle_addCart} from '../action/index'

function CartIcon(props) {

// 購物車品項數量
const [cartLength,setCartLength]=useState(0)

//設定給hooks
useEffect(()=>{
setCartLength(props.CartAmount)
},[props.CartAmount])


    return (
        <div className="Cart-icon-box">
            <FaShoppingCart className="Cart-icon" />
            <div className="CartAmount">{cartLength}</div>
        </div>
    )
}

const mapStateToProps = store => {
    return {
      //購物車內容
      Cart: store.cart,
      CartAmount:store.CartAmount,
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        handle_addCart,
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)