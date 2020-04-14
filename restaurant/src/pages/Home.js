import React, {useState,useEffect}from 'react'
import {Link,withRouter} from 'react-router-dom'
import "../css/home.scss"

function Home(props){

//hooks
// 下方form表單使用 更換顏色
const [color,setColor]=useState('')

//滾動視差使用 透明度
const [styleOpacity,setStyleOpacity]=useState(false)
const [styleChefOpacity,setStyleChefOpacity]=useState(false)

//滾動視差使用 位置移動
const [styleTranslateX,setStyleTranslateX]=useState(false)
const [styleChefTranslateX,setStyleChefTranslateX]=useState(false)

// 淡化使用 1
const OpacityObj_one = {
    opacity:1
}
// 淡化使用 0.65
const OpacityObj_half = {
    opacity:0.65
}
//移動使用 x軸 初始值 回到0
const translateX_Zero_Obj={
    transform:'translateX(0px)'
}
//移動使用  x軸 負走向 回到-15
const translateX_Minus_Obj={
    transform:'translateX(-25px)'
}
//移動使用  x軸 正走向 回到15
const translateX_Add_Obj={
    transform:'translateX(25px)'
}

useEffect(()=>{
    //滾動視差效果
    document.addEventListener('scroll',()=>{
        //獲取視窗大小
            let widow_Width=document.body.clientWidth
            //獲取DOM位置
            let getTop=window.pageYOffset

            // 首先判斷 視窗大小
            if(widow_Width>760){
                //判斷位置 促使觸發

                //客人詢問的滾動視差判斷
                if(600>getTop>0){
                    setStyleTranslateX(true)
                    setStyleOpacity(true)
                }else{
                    setStyleOpacity(false)
                    setStyleTranslateX(false)
                }

                //chef 使用滾動視差的判斷
                if(getTop>400){
                    setStyleChefTranslateX(true)
                    setStyleChefOpacity(true)
                }else{
                    setStyleChefTranslateX(false)
                    setStyleChefOpacity(false)
                }
            }else{
                //RWD的效果全部取消
                setStyleTranslateX(false)
                setStyleOpacity(true)
                setStyleChefOpacity(false)

            }
        })
},[])

    return (
        <>
            <div className="features-box" >
                <div className="clearfix"></div>
                <h3>客人總是在詢問<br/>
                    這麼好吃的秘訣是什麼
                </h3>
                <div className="features-content" style={styleOpacity?OpacityObj_one:OpacityObj_half}>
                    <div className="features-content-item1" style={styleTranslateX?translateX_Zero_Obj:translateX_Minus_Obj}>
                        <img src="/image/feature_1.png" />
                        <h3>台灣本土蔬菜</h3>
                        <p>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.</p>
                    </div>
                    <div className="features-content-item">
                        <img src="/image/feature_2.png" />
                        <h3>專業米其林廚師</h3>
                        <p>Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.</p>
                    </div>
                    <div className="features-content-item3" style={!styleTranslateX?translateX_Zero_Obj:translateX_Minus_Obj}>
                        <img src="/image/feature_3.png" />
                        <h3>對於專業不能退讓</h3>
                        <p>Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.</p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="chef-info">
                <img src="/image/main_chef_brown.png" />
                <div style={styleChefOpacity?OpacityObj_one:OpacityObj_half}>
                    <div className="chef-info-content" style={styleChefTranslateX?translateX_Zero_Obj:translateX_Add_Obj}>
                    <h4>今日主廚：帕金森、梅在帕<br/>
                    Tody Chef: Plum in Shock</h4>
                    <p>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum.</p>
                    </div>
                </div>
                
            </div>
            <div className="customer-msg">
                    <div className="clearfix"></div>
                    <h2>聽聽別人的感想</h2>
                    <div className="customer-msg-content">
                        <div className="customer-msg-item">
                            <img src="/image/avatar_1.png" />
                            <div>
                                <h3>高雄吃一口</h3>
                                <p>自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。</p>
                                <p>-- 產品經理</p>
                            </div>
                            </div>    
                        <div className="customer-msg-item">
                            <img src="/image/avatar_2.png" />
                            <div>
                                <h3>廟口小霸王</h3>
                                <p>自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。</p>
                                <p>-- 產品經理</p>
                            </div>
                        </div>    
                        <div className="customer-msg-item">
                            <img src="/image/avatar_3.png" />
                            <div>
                                <h3>春天也來了</h3>
                                <p>自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。</p>
                                <p>-- 產品經理</p>
                            </div>
                        </div>   
                    </div>
                    <div className="clearfix"></div>
            </div>
            <div className="order-info">
                <div className="clearfix"></div>
                <h2>我們的位置不太夠坐<br/>
                    要不要先定位呢？
                </h2>
                <div className="order-form">
                    <img src="/image/Map.png"/>
                    <form>
                        <ul className="order-form-box">
                            <li>
                                <label>姓名</label>
                                <input type="text" placeholder="您的姓名"/>
                            </li>
                            <li>
                                <label>電話</label>
                                <input type="text" placeholder="手機電話"/>
                            </li>
                            <li>
                                <label>信箱</label>
                                <input type="text" placeholder="您的信箱"/>
                            </li>
                            <li>
                                <label>人數</label>
                                <input type="text" placeholder="用餐人數"/>
                            </li>
                            <li className="choose-box" >
                                <label>是否需要素食</label>
                                <div>
                                    <label onClick={()=>setColor('Yes')} htmlFor="Yes" style={{background:`${color=='Yes'?'#000':'#fff'}`,color:`${color=='Yes'?'#fff':'#000'}`}}>是</label>
                                    <label onClick={()=>setColor('No')}  htmlFor="No" style={{background:`${color=='No'?'#000':'#fff'}`,color:`${color=='No'?'#fff':'#000'}`}}>否</label>
                                    <input id="Yes" name="vegetarian" type="radio"/>
                                    <input  id="No" name="vegetarian" type="radio"/>
                                </div>
                                
                            </li>
                        </ul>
                        <div className="btn-box">
                            <Link to="/" className="cancel-btn">取消</Link>
                            <Link to="/" className="send-btn">送出</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default withRouter(Home)