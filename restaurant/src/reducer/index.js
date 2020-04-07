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

const rootReducer = combineReducers({
    cart,CartAmount
})


export { rootReducer }