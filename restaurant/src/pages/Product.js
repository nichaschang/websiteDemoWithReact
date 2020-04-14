import React, { useState, useEffect } from 'react'
import '../css/product.scss'
import ItemCard from '../component/ItemCard'
import ProductAside from '../component/ProductAside'
import CartIcon from '../component/CartIcon'
import SearchInput from '../component/SearchInput'
// import {order} from '../component/items'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {handle_addCart,getMemberData,getProductData} from '../action/index'

function Product(props) {

const [pSort,setPSort]=useState('全部')
const [pBox,setPBox]=useState([])

//sort
    useEffect(()=>{
        let box=[]
        props.productInfo.map((v,i)=>{
            v.sort.map((val,ind)=>{
                if(val==pSort){
                  box.push(v)  
                }
            })
        })
        setPBox(box)
    },[pSort])


    // useEffect(() => {
    //     console.log('pBox',pBox)
    // }, [pBox])

    useEffect(() => {
        props.getProductData()
    }, [])

    //search 判斷
    function test(e){
        let box=[]
        if(e!==''){
            props.productInfo.map((v,i)=>{
                // 將產品名稱個別分開，變成關鍵字
                let dataWord=v.itemName.split('')
                // 將搜尋欄的字也分開
                let searchWord=e.split('')
                //使用產品名稱來搜尋是否有相同的字
                for(let i=0;i<dataWord.length;i++){
                    
                    let regex=RegExp(dataWord[i])
                    //呼叫搜尋欄的字 個別比較
                    for(let k=0;k<searchWord.length;k++){
                        if(regex.test(searchWord[k])){
                            let index=box.findIndex(e=>e==v)
                            if(index==-1){
                                box.push(v)
                            }
                            
                        }
                    }
                }
            })
            setPBox(box)
        }else{
            setPBox(props.productInfo)
        }
        
    }

    useEffect(() => {
        setPBox(props.productInfo)
    }, [props.productInfo])
    return (
        <div className="product-box">
            <div className="clearfix"></div>
            <div className="sort-aside">
            <div className="sort-title">
                <img src="/image/cart_icon.png" /><span>線上訂購美食</span>
            </div>
                <ProductAside onClick={sort=>setPSort(sort)}/>
            </div>
            <div className="item-content">
                <div className="topside">
                    <SearchInput onChange={sort=>test(sort)}/>
                    <div className="checkout-content">
                    <Link to="/Order" className="goCheck" ><span>結帳去</span></Link> | <Link to="/Order" className="goCheck"><CartIcon /></Link>
                    </div>
                </div>
                <div className="items-box">
                {pBox.map((v,i)=>{
                    return(
                        <ItemCard data={v} />
                    )
                })}
                </div>
            </div>
            
            
        </div>
    )
}

const mapStateToProps = store => {
    return {
      //購物車內容
      Cart: store.cart,
      memberInfo:store.memberInfo,
      productInfo:store.productInfo,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        handle_addCart,
        getMemberData,getProductData,
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Product)
// export default Product
