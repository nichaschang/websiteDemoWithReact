import React from 'react'
import '../css/main.scss'
import '../css/member.scss'
import { Formik,Field,ErrorMessage,Form} from 'formik'
import * as Yup from 'yup'

function MemberFormikName(props){

console.log(props)

const NameSchema=Yup.object().shape({
    name:Yup.string()
        .required('不能空白')
})

    return (
        <>
           
            <Formik
            initialValues={{ name: ''}}
            validationSchema={NameSchema}
            onSubmit={(values,{setSubmitting}) => {
                // alert(JSON.stringify(values))
                alert('更新成功')
                props.editName(values.name)
                props.cancel()
                setSubmitting(false)
            }}
            >
            {({isValid }) => (
                <Form>
                    <div className="eidt-box-open">
                    <p>輸入姓名</p>
                    <div className="edit-Info-input">
                        <Field type="text" name="name" autoComplete="off" />
                        <ErrorMessage name="name" component="div" style={{color:"#f00",textAlign:"left",padding:"5px"}}/>
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

export default MemberFormikName