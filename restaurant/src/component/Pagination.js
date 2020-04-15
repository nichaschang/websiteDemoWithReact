import React ,{useState,useEffect}from 'react'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'


function Pagination(props) {


// 按鈕樣式
const btnStyle={
    border:'2px solid #ddd',
    background:'#fff',
    padding:'8px',
    margin:0
}

// 頁數基本樣式
const pageStyle={
    border:'1px solid #ddd',
    borderTop:'2px solid #ddd',
    borderBottom:'2px solid #ddd',
    padding:'6px 8px',
    margin:'0',
    background:'#fff'
}

// 當下選擇的頁數樣式
const ActivepageStyle={
    border:'1px solid #ddd',
    borderTop:'2px solid #ddd',
    borderBottom:'2px solid #ddd',
    background:'#fff',
    padding:'6px 8px',
    margin:'0',
    fontWeight:'bold',
    color:'#d56c23'
}

//Pagination DOM
const pageDOM=[]

// 產生 Pagination DOM
for(let i=0;i<props.needPage;i++){
    pageDOM.push(
        <>
            <span style={props.page==i+1?ActivepageStyle:pageStyle}>{i+1}</span>
        </>
    )
}

//判斷頁數 back / foward 及 最初頁/最大頁 範圍
function pageState(e){

    //foward 為true /  back 為false
    if(e==true){
        if(props.page+1>props.needPage){
            props.changePage(props.page)
        }else{
            props.changePage(props.page+1)
        }
    }else{
        if(props.page-1<=0){
            props.changePage(props.page)
        }else{
            props.changePage(props.page-1)
        }
    }
}


    return (
        <>
        <button onClick={()=>pageState(false)} style={btnStyle}><IoIosArrowBack /></button>
        {pageDOM}
        <button onClick={()=>pageState(true)} style={btnStyle}><IoIosArrowForward /></button>
        </>
    )
}

  export default Pagination
