import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import "../css/Contact.scss"
import 'date-fns';
import { Button ,Menu ,MenuItem,Grid } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const AdviceSchema = Yup.object().shape({
    userName:Yup.string()
    .required('姓名為必填欄位'),
    phone:Yup.string()
    .matches(/^[0-9]*$/,'只能輸入數字')
    .required('電話為必填欄位'),
    email:Yup.string()
    .required('信箱為必填欄位')
    .email('信箱格式有誤')
})


function Contact(props){
const [color,setColor]=useState('')
const [cusExp,setCusExp]=useState('')
const [anchorEl, setAnchorEl] = useState(null);
const [selectedDate, setSelectedDate] =useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return (
        <>
        <Formik
initialValues={{userName:'',phone:'',email:''}}
validationSchema={AdviceSchema}
onSubmit={(values,{setSubmitting})=>{
    setTimeout(()=>{
        alert(JSON.stringify(values))
        setSubmitting(false)
    },500)
}}
>
            {({isValid})=>(
                <div className="contact-box">
                <div className="contact-banner-box">
                <p>感謝您對 美式餐廳 的支持
                <br/>我們竭誠的歡迎您留下您的意見與建議</p>
                </div>
                <Form className="contact-form-box">
                    <ul className="contact-form-ul">
                        <li className="contact-list">
                            <Field component={TextField} type="text"  name="userName"  label="請填入姓名" />
                        </li>
                        <li className="contact-list">
                            <Field  component={TextField} type="text" name="phone" label="請填入手機電話" fullWidth />
                        </li>
                        <li className="contact-list">
                            <Field  component={TextField} type="text"  name="email" label="請填入信箱" fullWidth />
                        </li>
                        <li className="cusExp-box">
                            <p>消費日期</p>
                            <Field component={TextField} type="date" name="comesDate"  />
                        </li>
                        <li className="cusExp-box">
                            <p>用餐經驗回饋</p>
                            <div className="cusExp-choose">
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>選擇</Button>
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={()=>{
                                    handleClose()
                                    setCusExp('讚賞')
                                }}>讚賞</MenuItem>
                                <MenuItem onClick={()=>{
                                    handleClose()
                                    setCusExp('抱怨')
                                }}>抱怨</MenuItem>
                                <MenuItem onClick={()=>{
                                    handleClose()
                                    setCusExp('建議')
                                }}>建議</MenuItem>
                                <MenuItem onClick={()=>{
                                    handleClose()
                                    setCusExp('問題')
                                }}>問題</MenuItem>
                            </Menu>
                            <p className="cusExp" name="choose">{cusExp}</p>
                            </div>
                        </li>
                        <li className="contact-list-txtbox">
                        <Field component={TextField}
                        label="您的意見"
                        multiline
                        rows="8"
                        defaultValue="輸入文字"
                        variant="outlined"
                        name="advice"
                        />
                        </li>
                    </ul>
                    <div className="contact-send-box">
                        <div className="error-box">
                            <ErrorMessage name="userName" component="span"/>
                            <ErrorMessage name="phone" component="span"/>
                            <ErrorMessage name="email" component="span"/>
                        </div>
                        <div className="btn-box">
                            <button type="submit" disabled={!isValid}  className="send-btn">送出</button>
                    </div>
                    </div>
                    
                </Form>
            </div>    
                )}            
            </Formik>
        </>
    )
}

export default Contact