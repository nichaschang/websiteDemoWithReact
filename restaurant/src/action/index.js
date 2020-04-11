
export const handle_addCart =(val,data,status)=>{
    return dispatch =>{
        let idBox=[]
        data.map((val,ind)=>{
            idBox.push(val.id)
        })
        let findIndex=idBox.findIndex(e=>e==val.id)
        if(status){
            if(findIndex==-1){
                let newVal={...val,count:1}
                data.push(newVal)
            }else{
                data[findIndex].count =+data[findIndex].count+1
            }
        }else{
            let newData=data.filter(e=>e!==data[[findIndex]])
            data=newData
        }
        
        dispatch(AddCart(data))
        dispatch(getAmount(data))
    }
}

export const getMemberData=(val)=>{
    return async dispatch=>{
        const request=new Request(`http://localhost:3000/member/?email=${val.email}`,{
            method:'GET',
        })
        const res=await fetch(request)
        const data=await res.json()
        dispatch(getMember(data))
    }   
}


export const getProductData=(val)=>{
    return async dispatch=>{
        const request=new Request('http://localhost:3000/product',{
            method:'GET',
        })
        const res=await fetch(request)
        const data=await res.json()
        dispatch(getProduct(data))
    }   
}

export const getProduct=value=>({type:"SHOW_Product",value:value})
export const getMember=value=>({type:"SHOW_MEMBER",value:value})


export const AddCart=value=>({type:"ADD_CART",value:value})
export const getAmount=value=>({type:"ADD_AMOUNT",value:value})