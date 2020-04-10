import { combineReducers } from 'redux'

const cart=(state=[],action)=>{
    switch (action.type){
        case "ADD_CART":
            let newData=action.value
            return newData
        default:
            return state
    }
}

const CartAmount=(state=0,action)=>{
    switch (action.type){
        case "ADD_AMOUNT":
            return action.value.length
        default:
            return state
    }
}


const memberInfo=(state=[],action)=>{
    console.log('action',action)
    switch(action.type){
        case "SHOW_MEMBER":
            return action.value
        default:
            return state
    }
}

const productInfo=(state=[],action)=>{
    switch(action.type){
        case "SHOW_Product":
            return action.value
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cart,CartAmount,memberInfo,productInfo
})


export { rootReducer }