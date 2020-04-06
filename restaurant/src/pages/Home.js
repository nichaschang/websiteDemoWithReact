import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import "../css/home.scss"

function Home(){
const [color,setColor]=useState('')

    return (
        <>
            <div className="features-box">
                <div className="clearfix"></div>
                <h3>客人總是在詢問<br/>
                    這麼好吃的秘訣是什麼
                </h3>
                <div className="features-content">
                    <div className="features-content-item">
                        <img src="/image/feature_1.png" />
                        <h3>台灣本土蔬菜</h3>
                        <p>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.</p>
                    </div>
                    <div className="features-content-item">
                        <img src="/image/feature_2.png" />
                        <h3>專業米其林廚師</h3>
                        <p>Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.</p>
                    </div>
                    <div className="features-content-item">
                        <img src="/image/feature_3.png" />
                        <h3>對於專業不能退讓</h3>
                        <p>Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.</p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="chef-info">
                <img src="/image/main_chef_brown.png" />
                <div>
                <h4>今日主廚：帕金森、梅在帕<br/>
                Tody Chef: Plum in Shock</h4>
                <p>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum.</p>
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
                            <Link to="/Home" className="cancel-btn">取消</Link>
                            <Link to="/Home" className="send-btn">送出</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home