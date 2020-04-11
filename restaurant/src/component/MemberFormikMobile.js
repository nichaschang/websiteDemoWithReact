import React from 'react'
import '../css/main.scss'
import '../css/member.scss'
import { Formik,Field,ErrorMessage,Form} from 'formik'
import * as Yup from 'yup'

function MemberFormikMobile(props){

console.log(props)

const MobileSchema=Yup.object().shape({
    mobile:Yup.string()
        .required('不能空白')
        .matches(/^[0-9]*$/,'只能輸入數字')
        .max(10,'填寫正確長度')
})

    return (
        <>
           
            <Formik
            initialValues={{ mobile: ''}}
            validationSchema={MobileSchema}
            onSubmit={(values,{setSubmitting}) => {
                alert(JSON.stringify(values))
                props.editMobile(values.mobile)
                props.cancel()
                setSubmitting(false)
            }}
            >
            {({isValid }) => (
                <Form>
                    <div className="eidt-box-open">
                    <p>輸入電話</p>
                    <div className="edit-Info-input">
                        <Field type="text" name="mobile" autoComplete="off" />
                        <ErrorMessage name="mobile" component="div" style={{color:"#f00",textAlign:"left",padding:"5px"}}/>
                    </div>
                    <div className="edit-btn-box">
                        <button type="submit" className="edit-ok" disabled={!isValid}>確認</button>
                        <button className="edit-cancel" onClick={()=>props.cancel()}>取消</button>
                    </div>
                </div>
                </Form>
            )}
            </Formik>
        </>
    )
}

export default MemberFormikMobile