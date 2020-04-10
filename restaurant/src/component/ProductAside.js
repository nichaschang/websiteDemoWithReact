import React, { useEffect,useState } from 'react'
import '../css/productAside.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getProductData} from '../action/index'

function ProductAside(props) {

const [sortBox,setSortBox]=useState([])
useEffect(()=>{
props.getProductData()
console.log(props)
},[])
useEffect(() => {
    let box=[]

    //獲取類別項目
    props.productInfo.map((v,i)=>{
        v.sort.map((val,ind)=>{
        let index=box.findIndex(e=>e==val)
        if(index==-1){
            box.push(val)
            }
        })
    })

    //將全部選項移到第一位
    let handle_box=['全部']
    for(let i=0;i<box.length;i++){
        if(box[i]!=='全部'){
            handle_box.push(box[i])
        }
    }
    setSortBox(handle_box)
}, [props.productInfo])
    return (
        <div>
            <ul className="product-sort">
            {sortBox.map((v,i)=>{
                return (
                    <li onClick={()=>props.onClick(v)}>{v}</li>
                ) 
            })}
            </ul>
        </div>
    )
}


const mapStateToProps = store => {
    return {
      //購物車內容
      productInfo:store.productInfo,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getProductData,
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProductAside)
// export default ProductAside