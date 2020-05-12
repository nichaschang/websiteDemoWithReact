import React ,{useState,useEffect}from 'react'
// import {order} from '../component/items'
import '../css/itemCard.scss'
import {FiHeart} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {handle_addCart,favorProdcut} from '../action/index'
function ItemCard(props) {

//喜歡則設定會true
const [myFavor,setMyFavor]=useState(false)
const [recheckFavor,setRecheckFavor]=useState([])


//獲取產品ID 下個useEffect要判斷使用
useEffect(()=>{
  let box=[]
  props.FavorInfo.map((v,i)=>{
    // console.log('第一執行  = 產品ID',props.data.id)
    // console.log('第二執行  = 我的最愛',v.id)
    box.push(v.id)
  })
  setRecheckFavor(box)


},[props.data])

//判斷產品是否有在收藏裡面
useEffect(()=>{
  let idx=recheckFavor.findIndex(e=>e==props.data.id)
  if(idx!==-1){
    setMyFavor(true)
  }else{
    setMyFavor(false)
  }
  //console.log(recheckFavor)
},[recheckFavor])


function sendFavorMsg(val){
  if(val){
    alert('已加入收藏')
  }else{
    alert('取消收藏')
  }
}

//折扣 等待規劃
function checkDiscountPrice(val){
  let price
  if(val){
    price=Math.round(props.data.price*.95)
  }else{
    price=Math.round(props.data.price)
  }
  return price
}

    return (
        <>
            <div className="item-card" key={props.data.itemName}>
                <div className="item-img">
                    <FiHeart className={`favor-icon ${myFavor?'active':''}`}  onClick={()=>{
                      setMyFavor(!myFavor)
                      props.favorProdcut(!myFavor,props.data,props.FavorInfo)
                      sendFavorMsg(!myFavor)
                    }
                    } />
                    <img src={props.data.img} />
                </div>
                <div className="product-txt">
                    <h3>{props.data.itemName}</h3>
                    <h5>{props.data.itemEName}</h5>
                    <hr />
                    <h2>${props.data.price}</h2>
                    <div><button className="btn" onClick={()=>{
                    props.handle_addCart(props.data,props.Cart,true)
                    alert('已加入購物車')
                    }
                    
                    }><FaShoppingCart className="btn-icon"/>加入購物車</button></div>
                </div>
                
            </div>
        </>
    )
}

const mapStateToProps = store => {
    return {
      //購物車內容
      Cart: store.cart,
      FavorInfo:store.FavorInfo,
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        handle_addCart,favorProdcut,
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
