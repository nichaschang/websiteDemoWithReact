import React, { useState, useEffect } from 'react'
import '../css/product.scss'
import ItemCard from '../component/ItemCard'
import ProductAside from '../component/ProductAside'
import CartIcon from '../component/CartIcon'
import SearchInput from '../component/SearchInput'
import Pagination from '../component/Pagination'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {handle_addCart,getProductData} from '../action/index'

function Product(props) {

// 獲取要顯示的類別
const [pSort,setPSort]=useState('全部')

//獲取當下的類別產品數量
const [pBox,setPBox]=useState([])

// 獲取總共會有幾頁
const [needPage,setNeedPage]=useState()

//當前頁數
const [nowPage,setNowPage]=useState(1)

//產品最大值 / 最小值
const [minItemIndex,setMinItemIndex]=useState(0)
const [maxItemIndex,setMaxItemIndex]=useState(0)


//sort 利用分類來顯示當前產品項目 初始值為 全部
    useEffect(()=>{
        let box=[]
        props.productInfo.map((v,i)=>{
            v.sort.map((val,ind)=>{
                if(val===pSort){
                  box.push(v)  
                }
            })
        })
        setPBox(box)
    },[pSort])


    //獲取總共頁數
    useEffect(() => {
        // 總筆數 / 一頁要6筆 = 需要產生的頁數
        let Maxpage=Math.ceil(pBox.length/6)
        setNeedPage(Maxpage)

        //想要顯示的產品更改後 將頁重新初始化
        setNowPage(1)
        setMinItemIndex(0)
        setMaxItemIndex(0)

    }, [pBox])


    //檢視需要頁數使用
    // useEffect(()=>{
    //     console.log('needPage',needPage)
    // },[needPage])


    // 獲取產品
    useEffect(() => {
        props.getProductData()
    }, [])

    // 設定當前頁數的產品index 最大值/最小值
useEffect(()=>{
// 一頁6個品項 所以*6 取得品項index

// 產品初始index為0 而nowPage 設定初始值為1，所以-1
let getMinIndex=(nowPage-1)*6
let getMaxIndex=nowPage*6

//設定產品 index 最小值 
setMinItemIndex(getMinIndex)
//設定產品 index 最大值 
setMaxItemIndex(getMaxIndex)

},[nowPage,pBox])


//檢視 產品index狀態
// useEffect(()=>{
//     console.log('minItemIndex',minItemIndex)
//     console.log('maxItemIndex',maxItemIndex)
//     console.log('pBox',pBox)
// },[maxItemIndex,minItemIndex])

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
            //更改當前產品分類品項
            setPBox(box)
        }else{
            //空白為 全部 
            setPBox(props.productInfo)
        }
        
    }

    //呼叫的產品有改變則重新hooks
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
                <ProductAside onClick={sort=>
                    setPSort(sort)
                }/>
            </div>
            <div className="item-content">
                <div className="topside">
                    <SearchInput onChange={sort=>test(sort)}/>
                    <div className="checkout-content">
                    <Link to="/Order" className="goCheck" ><span>結帳去</span></Link> | <Link to="/Order" className="goCheck"><CartIcon /></Link>
                    </div>
                </div>
                <div className="items-box">
            <div className="clearfix"></div>
                {pBox.map((v,i)=>{
                    if( i>=minItemIndex && i<maxItemIndex){
                    return(
                        <ItemCard data={v} />
                    )

                    }
                })}
                </div>
            
            <div className="pagination-box">
                <Pagination page={nowPage} needPage={needPage} changePage={(e)=>setNowPage(e)}/>
            </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = store => {
    return {
      Cart: store.cart,
      productInfo:store.productInfo,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        handle_addCart,getProductData,
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Product)
// export default Product
