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
const [myFavor,setMyFavor]=useState(true)

useEffect(()=>{
  //判斷是否已存在收藏裡
  props.FavorInfo.map((v,i)=>{
    if(v.id==props.data.id){
      setMyFavor(false)
    }
  })
},[])

// useEffect(()=>{
//     console.log(props.CartAmount)
// },[props.CartAmount])

    return (
        <>
            <div className="item-card" key={props.data.itemName}>
                <div className="item-img">
                    <FiHeart className={`favor-icon ${!myFavor?'active':''}`}  onClick={()=>{
                      setMyFavor(!myFavor)
                      props.favorProdcut(myFavor,props.data,props.FavorInfo)
                    }
                    } />
                    <img src={props.data.img} />
                </div>
                <div className="product-txt">
                    <h3>{props.data.itemName}</h3>
                    <h5>{props.data.itemEName}</h5>
                    <hr />
                    <h2>${props.data.price}</h2>
                    <div><button className="btn" onClick={()=>
                    props.handle_addCart(props.data,props.Cart,true)
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
