import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import '../css/CartIcon.scss'

function CartIcon() {
    return (
        <div>
            <FaShoppingCart className="Cart-icon" />
        </div>
    )
}
export default CartIcon