import React from 'react'
import './about.scss'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'
import Img5 from '../assets/img5.jpg'
import Img6 from '../assets/img6.jpg'

import {Link} from 'react-router-dom'

const Insight = () => {
    return (
    <body>

<div class="flip-main">
   <div class="container">
      <div class="row">
         <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src={Img1} alt='flip-card'/>
                </div>
                <div class="flip-card-back">
                   <div class="text">
                      <h3>1</h3>
                      <p>멸종 위기에 처한 동식물들과의 공존</p>
                   </div>
                </div>
            </div>
         </div>
         <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src={Img2} alt='flip-card'/>
                </div>
                <div class="flip-card-back">
                   <div class="text">
                      <h3>2</h3>
                      <p>우리는 공존하는 세상을 위해 노력해야 합니다.</p>
                   </div>
                </div>
            </div>
         </div>
         <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src={Img3} alt='flip-card'/>
                </div>
                <div class="flip-card-back">
                   <div class="text">
                      <h3>3</h3>
                      <p>함께 살아가는 생물들이 곁에 있다는 점을 잊지 맙시다.</p>
                   </div>
                </div>
            </div>
         </div>
         <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src={Img4} alt='flip-card'/>
                </div>
                <div class="flip-card-back">
                   <div class="text">
                      <h3>4</h3>
                      <p>이제는 환경에 대한 인식을 바꾸어야 할 때 입니다.</p>
                   </div>
                </div>
            </div>
         </div>
         <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src={Img5} alt='flip-card'/>
                </div>
                <div class="flip-card-back">
                   <div class="text">
                      <h3>5</h3>
                      <p>환경 보호를 위해 다른 이들과 일상 속에서 작은 것들을 실천해나갑시다.</p>
                   </div>
                </div>
            </div>
         </div>
         <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src={Img6} alt='flip-card'/>
                </div>
                <div class="flip-card-back">
                   <div class="text">
                      <h3>6</h3>
                      <p>3차원 가상공간에서 환경에 대한 인식을 높이고, 현실세계에서 이에 대한 인식이 행동으로 꼭 이루어지기를 바랍니다!</p>
                   </div>
                </div>
            </div>
         </div>
      </div>
   </div>
 </div>



    <section className="banner-area">
    <div className="banner-img"></div>
    <h1>♣ 메타버스에서 즐기는 환경 체험 캠페인 ♣</h1>
    <br></br>
    <h3>이 사이트는 3차원 가상공간에서 환경에 대한 인식을 높이고, 관련 행동을 촉구하기 위해 만들어졌습니다. <br></br>
        메타버스 게임을 통해 환경과 가까워질 수 있는 계기를 제공합니다. 이를 통해 여러분들이 환경에 대해서 다시 한 번 생각해볼 수 있을 것이라고 기대합니다. </h3>
    </section>

    <section className="services-area" id="services">
    <h3 className="section-title">메타버스 게임 규칙 소개</h3>
    <ul className="services-content">
        <li>
            <h4>1단계</h4>
            <p>메타버스에 입장하면 큐브가 놓인 공간이 나타납니다.</p>
        </li>
        <li>
            <h4>2단계</h4>
            <p>사용자는 방향키를 눌러 캐릭터를 이동시킬 수 있습니다.</p>
        </li>
        <li>
            <h4>3단계</h4>
            <p>큐브에 다가가 자유롭게 큐브를 무너뜨리거나 쌓아보세요!</p>
        </li>
    </ul>
    </section>
  </body>
    )
}

export default Insight