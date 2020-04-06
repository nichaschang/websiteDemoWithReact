import React ,{useState}from 'react'
// import {order} from '../component/items'
import '../css/itemCard.scss'
import {FiHeart} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
import { useEffect } from 'react'
function ItemCard(props) {
const [myFavor,setMyFavor]=useState(true)
    let itemsDOM=[]
    // useEffect(()=>{
    //     console.log(myFavor)
    // },[myFavor])
    // props.data.map((v,i)=>{
    //     itemsDOM.push(
    //         <div className="item-card" key={v.itemName}>
    //             <div className="item-img">
    //                 <FiHeart className={`favor-icon ${!myFavor?'active':''}`}  onClick={()=>setMyFavor(!myFavor)} />
    //                 <img src={v.img} />
    //             </div>
    //             <div className="product-txt">
    //                 <h3>{v.itemName}</h3>
    //                 <h5>{v.itemEName}</h5>
    //                 <hr />
    //                 <h2>${v.price}</h2>
    //                 <div><button className="btn"><FaShoppingCart className="btn-icon"/>加入購物車</button></div>
    //             </div>
                
    //         </div>
    //     )
    // })

    return (
        <>
            <div className="item-card" key={props.data.itemName}>
                <div className="item-img">
                    <FiHeart className={`favor-icon ${!myFavor?'active':''}`}  onClick={()=>setMyFavor(!myFavor)} />
                    <img src={props.data.img} />
                </div>
                <div className="product-txt">
                    <h3>{props.data.itemName}</h3>
                    <h5>{props.data.itemEName}</h5>
                    <hr />
                    <h2>${props.data.price}</h2>
                    <div><button className="btn"><FaShoppingCart className="btn-icon"/>加入購物車</button></div>
                </div>
                
            </div>
        </>
    )
}

export default ItemCard
