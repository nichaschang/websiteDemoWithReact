import React ,{useState,useEffect}from 'react'
import '../css/main.scss'
import '../css/member.scss'
import { compose } from 'redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {chageOrderName} from '../util/HandleOrder'


function MemeberOrder(props){

//訂單編號 顯示有哪些訂單
const [orderNum,setOrderNum]=useState([])

//獲取要顯示的訂單內容物
const [myOrder,setMyOrder]=useState('')

// 獲取選取的訂單內容
const [orderItem,setOrderItem]=useState([])

    //獲取會員訂單
    useEffect(() => {
        if(props.cusInfo.length!==0){
            props.cusInfo.map((v,i)=>{
                setOrderNum(v.order)
            })
            
        }
        
    }, [])

    // 顯示選擇的訂單內容
    useEffect(()=>{
        orderNum.map((v,i)=>{
            if(myOrder==v.id){
                setOrderItem(v.product)
            }
        })
    },[myOrder])


    /*useEffect(()=>{
        console.log('orderItem',orderItem)
        console.log('orderNum',orderNum)
    },[orderItem,orderNum])*/


    //訂單DOM
    const boxDOM=[]
    if(orderNum!==[]){
        orderNum.map((v,i)=>{
            
            boxDOM.push(
                <>
                    <h3 onClick={()=>setMyOrder(v.id)}>訂單編號：{v.id}
                        <span style={{marginLeft:'20px'}}>消費總金額${v.total}</span>
                    </h3>
                        {v.id==myOrder?(<div className={orderItem.length>0?"orderItem-show-sec":"orderItem-show"}>

                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>產品編號：</TableCell>
                                    <TableCell>產品價格：</TableCell>
                                    <TableCell>產品數量：</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orderItem.map((v,i) => (
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {chageOrderName(v.id,props.productInfo)}
                                    </TableCell>
                                    <TableCell>{v.price}</TableCell>
                                    <TableCell>{v.amount}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        </div>):''}
                </>
            )
        })
    }

    

    return (
        <>
        <div className="member-info-order">
            {boxDOM}
        </div>
        </>
    )
}

export default MemeberOrder