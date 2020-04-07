
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
                console.log(123)
                data.push(newVal)
            }else{
                console.log(456)
                data[findIndex].count =+data[findIndex].count+1
            }
        }else{
            let newData=data.filter(e=>e!==data[[findIndex]])
            console.log('newData',newData)
            data=newData
        }
        
        console.log(data)
        dispatch(AddCart(data))
        dispatch(getAmount(data))
    }
}

export const AddCart=value=>({type:"ADD_CART",value:value})
export const getAmount=value=>({type:"ADD_AMOUNT",value:value})