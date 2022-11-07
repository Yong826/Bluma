import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./img/logo.png";
import React, { Component, useState } from "react";
import Carousel from "./component/Slick.js";
import FooterMain from "./component/footer.js";
import HowUse from "./component/howuse.js";
import KakaoMap from "./component/kakaomap.js";
import Login from "./component/login.js";
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={Login}/>
        </Routes>





      <div class="container">
        {/* 헤더 시작부분 */}
        <header
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom position-sticky bg-white top-0"
          style={{ zIndex: 1 }}
        >
          <a
            href="/"
            class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img src={logo} className="logo" />
          </a>
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-3 link-dark">
                Home
              </a>
            </li>
            <li>
              <a href="#tg1" class="nav-link px-3 link-dark">
                소개
              </a>
            </li>
            <li>
              <a href="#tg2" class="nav-link px-3 link-dark">
                이용방법
              </a>
            </li>

            <li>
              <a href="#" class="nav-link px-3 link-dark">
                세차용품
              </a>
            </li>
            <li>
              <a href="#tg4" class="nav-link px-3 link-dark">
                찾아오시는 길
              </a>
            </li>
          </ul>
          <div class="col-md-3 text-end">
            <button class="btn" onClick={openModal}>
              로그인
            </button>
            <button class="btn">
              회원가입
            </button>
          </div>
        </header>
        {/* 헤더 끝나는 부분 */}

        {/* 바디 시작지점 */}
        <body>

          {/* 케러셀 시작 / 위치는 component -> slick.js */}
          <Carousel />

          {/* 소개 시작 */}
          <div
            class="row justify-content-md-center"
            id="tg1"
            style={{ textAlign: "center" }}
          >
            <div class="col col-lg-2"></div>
            <div class="col-md-auto">
              <h1>
                "방문 해주셔서 감사합니다" <br /> "블루마 셀프카워시 입니다."
              </h1>
              <h5>
                스노우폼 / 하부 고압 세차 / 샤워 세차 100% 상수도 / 온수 세차 /
                열선 탑재
              </h5>
              <h5>
                충전식 RF 세차 카드 발급 후 시설 이용 (동전 투입 이용 불가)
              </h5>
              <h5>13개의 드라잉 존과 넓은 차대 간격</h5>
              <h5>개수대 2곳으로 여유롭게 이용 가능 </h5>
              <h5>세차 카드 발급 및 충전은 무인 발급기 이용</h5>
              <h5>
                신용카드 결제, 현금 영수증 처리 가능 (사무실 운영 시간에 문의)
              </h5>
              <h5>개인 용품 사용 가능 (주말 및 공휴일 자제 부탁) </h5>
              <h5>타이어 공기압 주입기 설비 </h5>
              <h5>세차 용품샵 및 사무실 운영 시간 10:00 ~ 18:00 </h5>
              <h5>사무실 운영 시간 내 신용카드 결제, 현금 영수증 가능</h5>
            </div>
            <div class="col col-lg-2"></div>
          </div>
          {/* 소개끝 */}

          {/* 이용방법 소개 LOCATION component -> howuse.js */}
          <div id="tg2">
            <HowUse />
          </div>

          {/* 찾아오시는 길 */}
          <div
            class="row"
            id="tg4"
            style={{ paddingBottom: "150px", paddingTop: "150px" }}
          >

            <div class="col-6" style={{ zIndex: 0 }}>
             {/* 카카오맵 */}
              <KakaoMap />
            </div>
            <div class="col-6" style={{ textAlign: "center" }}>
              <h3 style={{ paddingTop: "50px" }}>찾아오시는 길</h3>
              <h5 class="mt-5">
                Location : 울산광역시 북구 산하중앙1로 93 95 블루마 카워시
              </h5>
              <h5 class="mt-2">Opening Hour : 06:00 am - 24:00 pm</h5>
              <h5 class="mt-2">Office Opening Hour : 08:00 am - 17:00 pm</h5>
            </div>
          </div>

          {/* 푸터 component -> footer.js */}
          <FooterMain />
        </body>
        {/* 바디끝 */}
      
      
      </div>
    </div>
  );
}

export default App;
