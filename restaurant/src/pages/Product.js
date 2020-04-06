import React from 'react'
import '../css/product.scss'
import ItemCard from '../component/ItemCard'
import ProductAside from '../component/ProductAside'
import CartIcon from '../component/CartIcon'
import SearchInput from '../component/SearchInput'
import {order} from '../component/items'
function Product() {

    return (
        <div className="product-box">
            <div className="clearfix"></div>
            <div className="sort-aside">
            <div className="sort-title">
                <img src="/image/cart_icon.png" /><span>線上訂購美食</span>
            </div>
                <ProductAside />
            </div>
            <div className="item-content">
                <div className="topside">
                    <SearchInput />
                    <div className="checkout-content">
                        <span>結帳去</span> | <CartIcon />
                    </div>
                </div>
                <div className="items-box">
                {order.map((v,i)=>{
                    return(
                        <ItemCard data={v} />
                    )
                })}
                </div>
            </div>
            
            
        </div>
    )
}
export default Product
