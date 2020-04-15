import React ,{useState,useEffect}from 'react'
// import {order} from '../component/items'
import '../css/itemCard.scss'
import {FiHeart} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {handle_addCart,favorProdcut} from '../action/index'


function FavorItem(props) {
//喜歡則設定會true
const [myFavor,setMyFavor]=useState(true)


// useEffect(()=>{
//     console.log(props)
// },[])

// 顯示收藏DOM
const favorDOM=[]
props.FavorInfo.map((v,i)=>{
    favorDOM.push(
            <div className="item-card" key={v.itemName} style={{padding:'10px'}}>
                <div className="item-img">
                    <img src={v.img} />
                </div>
                <div className="product-txt">
                    <h3>{v.itemName}</h3>
                    <h5>{v.itemEName}</h5>
                    <hr />
                    <h2>${v.price}</h2>
                </div>
                    <div><button className="btn" onClick={()=>
                    props.favorProdcut(false,v,props.FavorInfo)
                    }><FaShoppingCart className="btn-icon"/>取消</button></div>
            </div>
    ) 
})

        return (
            <>
            <div className="favor-box">
                {favorDOM}
            </div>
                
            </>
        )

    
}

const mapStateToProps = store => {
    return {
      //購物車內容
      FavorInfo:store.FavorInfo
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
  export default connect(mapStateToProps, mapDispatchToProps)(FavorItem)
