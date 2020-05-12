import { combineReducers } from 'redux'


//購物車
const cart=(state=[],action)=>{
    switch (action.type){
        case "ADD_CART":
            let newData=action.value
            return newData
        default:
            return state
    }
}

//購物車icon
const CartAmount=(state=0,action)=>{
    switch (action.type){
        case "ADD_AMOUNT":
            return action.value.length
        default:
            return state
    }
}

//會員資料
const memberInfo=(state=[],action)=>{
    switch(action.type){
        case "SHOW_MEMBER":
            return action.value
        default:
            return state
    }
}

//收藏產品項目
const FavorInfo=(state=[],action)=>{
    // console.log(state)
    switch(action.type){
        case "ADD_MYFAVOR":
            return action.value
        default:
            return state
    }
}

//儲存折扣項目
const discountItem=(state=[],action)=>{

    switch(action.type){
        case "SHOW_DISCOUNT":
            return action.value
        default:
            return state
    }
}

//產品資料
const productInfo=(state=[],action)=>{
    switch(action.type){
        case "SHOW_Product":
            return action.value
        default:
            return state
    }
}



const rootReducer = combineReducers({
    cart,CartAmount,memberInfo,productInfo,FavorInfo,discountItem
})


export { rootReducer }