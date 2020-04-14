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


function MemeberOrder(props){

//訂單編號
const [orderNum,setOrderNum]=useState([])
//獲取要顯示的訂單內容物
const [myOrder,setMyOrder]=useState('')
// 獲取選取的訂單內容
const [orderItem,setOrderItem]=useState([])


    useEffect(() => {
        if(props.cusInfo.length!==0){
            props.cusInfo.map((v,i)=>{
                setOrderNum(v.order)
            })
            
        }
        
    }, [])

    const boxDOM=[]
    const orderBoxDOM=[]

    useEffect(()=>{
        orderNum.map((v,i)=>{
            if(myOrder==v.id){
                setOrderItem(v.product)
            }
        })
    },[myOrder])


    useEffect(()=>{
        console.log('orderItem',orderItem)
        console.log('orderNum',orderNum)
    },[orderItem,orderNum])


    if(orderNum!==[]){
        orderNum.map((v,i)=>{
            console.log(v)
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
                                    {v.id}
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