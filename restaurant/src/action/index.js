
//加入購物車 action
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

export const AddCart=value=>({type:"ADD_CART",value:value})

//購物車icon 品項數量
export const getAmount=value=>({type:"ADD_AMOUNT",value:value})

//會員登入 action
export const getMemberData=(val)=>{
    return async dispatch=>{
        const request=new Request(`http://localhost:3000/member/?email=${val.email}`,{
            method:'GET',
        })
        const res=await fetch(request)
        .catch((err)=>{
            console.log(err)
        })
        const data=await res.json()
        await console.log('data',data)
        dispatch(getMember(data))
    }   
}


//更新會員資料
export const updateMemberData=(val)=>{
    return async dispatch=>{
        await console.log('val',val)
        const request=new Request(`http://localhost:3000/member/${val.id}`,{
            method:'PUT',
            body:JSON.stringify(val),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
        await console.log('request',request)
        const res=await fetch(request)
        .catch((err)=>{
            console.log('err',err)
        })
        await console.log('request',res)
        const data=await res.json()
        await console.log('data',data)
        dispatch(getMember([data]))
    }   
}

export const getMember=value=>({type:"SHOW_MEMBER",value:value})

//獲取產品資料
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

//收藏action
export const favorProdcut=(val,product,data)=>{
    return dispatch=>{
        // console.log('val',val)
        // console.log('product',product)
        // console.log('data',data)
        let newData=data
        let idBox=[]
        data.map((v,i)=>{
            idBox.push(v.id)
        })
        if(val==true){
            newData.push(product)
            // console.log('newData',newData)
        }else{
            let idx=idBox.findIndex(e=>e==product.id)
            newData=data.filter(e=>e!==data[idx])
        }
        dispatch(getFavor(newData))
    }
}

export const getFavor=value=>({type:"ADD_MYFAVOR",value:value})
