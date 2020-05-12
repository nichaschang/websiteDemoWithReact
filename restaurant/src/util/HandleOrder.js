
export const handle_NewOrder=(val,data)=>{
//console.log('val',val)
//console.log('data',data)
let newOrder
let newId=0
let newTotal=100
let newOrderObj={
    id:0,
    product: val,
    total: 0
}
let memberData=data[0]
//取出原有訂單
    data.map((v,i)=>{
        console.log('v',v.order)
        newOrder=v.order
    })
//計算金額
val.map((v,i)=>{
newTotal+=v.price*v.count
})

//獲取新所有訂單
newId=newOrder.length+1
newOrderObj.id=newId
newOrderObj.total=newTotal+100
newOrder.push(newOrderObj)
//memberData.order=newOrder
//console.log('memberData',memberData)
//console.log('newOrder',newOrder)
//console.log('newTotal',newTotal)
    //newOrder.push()
//console.log('newOrderObj',newOrderObj)
return memberData
}

export const chageOrderName=(val,data)=>{
    console.log('val',val)
    let checkName
    data.map((v,i)=>{
        if(v.id==val){
            console.log(v.itemName)
            checkName= v.itemName
        }
    })
    return checkName
}
