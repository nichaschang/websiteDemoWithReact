import React, { useEffect } from 'react'
import '../css/productAside.scss'
function ProductAside(props) {

useEffect(()=>{
console.log(props)
},[])
    return (
        <div>
            <ul className="product-sort">
                <li onClick={()=>props.onClick('全部')}>全部</li>
                <li onClick={()=>props.onClick('只愛吃薯條')}>只愛吃薯條</li>
                <li onClick={()=>props.onClick('加熱就可食')}>加熱就可食</li>
                <li onClick={()=>props.onClick('不敗漢堡系列')}>不敗漢堡系列</li>
            </ul>
        </div>
    )
}


export default ProductAside