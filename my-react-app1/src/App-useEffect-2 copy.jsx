
//記得清空存檔，vite只能執行這個頁面的樣子

import { useState } from "react";

function App() {
  //使用者名稱
  const [inputUserName, setInputUserName] = useState("我是文字方塊");
  //縣市名
  const [selCity, setSelCity] = useState("請選擇");
  const cities = ["台北市", "桃園市", "新北市", "台中市", "高雄市", "台南市"];//建立陣列(資料列)
  //閱讀確認
  const [check, setCheck]=useState('false');
  //複選:多個核取方塊
  const [chklist, setChkList]=useState([]);
  //建立函式處理被勾選的項目
  const handleChkList = (e) => {
    //console.log(e.target.value);
    //使用其餘運算子保留以雞被勾選的項目+目前被勾選項目
    //setChkList([....chkList, e.target.value]);
    //檢查是否被勾選
    if(e.target.checked){
      //是=>原本+新的
      setChkList([...chklist,e.target.value]);
    }else{
      //否 =>從原本被勾選的項目中，拿掉不要的(filter)
      setChkList(
        chklist.filter((list)=>{
          list !== e.target.value
        })
      )
    }
  }

  return (
    <>
      <h1>react-表單</h1>
      <hr />

      {/* input */}
      <label htmlForm="userName">使用者名稱</label>
      <input
        type="text"
        id="userName"
        value={inputUserName}
        onChange={(e) => {
          setInputUserName(e.target.value);
        }}
      ></input>

      {/* select */}
      <label htmlForm="cityt">城市名</label>
      <select
        name=" "
        id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}
      >
        <option value=" " disable>請選擇</option>
        {
        cities.map((city) => {
          return (
            <option value={city} key={city}>{city}</option>
          );
        })}
      </select>

      <br/>
      {/* 單一核取方塊 */}
      <label htmlForm="isCheck">閱讀確認</label>
      <input type="checkbox" id="isCheck" value={check}
      onChange={(e) =>{
        //處理勾選值變化
        setCheck(e.target.checked);
      }}/>{check.toString()}
      <br/>
      {/* 複選:多個核取方塊 */}
      
      {/* <input type="checkbox" id="checklist1" name="like" value='HTML' onChange={''}/>
      <label html="checklist1">HTML</label>
      <input type="checkbox" id="checklist1" name="like" value='HTML' onChange={''}/>
      <label html="checklist1">CSS</label>
      <input type="checkbox" id="checklist1" name="like" value='HTML' onChange={''}/>
      <label html="checklist1">JS</label> */}

      arrList.map ((list) => {
        return <div key={list}>
          <input type="checkbox" name='like'
          value={list}
          onChange={handleChkList}/>
          <label htmlForm={list}>{list}</label>
        </div>
      })

      {/* 選項按鈕 */}

    </>
  );
}
export default App;
=======
//記得清空存檔，vite只能執行這個頁面的樣子

// src/App.jsx
import React from "react";
import "./App.css"; // 引入樣式

function App() {
  return (
    <div className="wrap">
      {/* 首頁廣告 */}
      <header>
        <div className="banner">
          <img src="../public/images/banner.jpg" alt="Banner" />
        </div>
      </header>

      {/* 特色*/}
      <div className="features">
        <div className="feature-box">
          <h3>教學影音</h3>
          <p>
            透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式。
          </p>
        </div>
        <div className="feature-box">
          <h3>良性互動</h3>
          <p>
            學習過程中，若您遇到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決。
          </p>
        </div>
        <div className="feature-box">
          <h3>趨勢分享</h3>
          <p>分享目前時下所流行之趨勢，讓各位可以掌握新趨勢的發展。</p>
        </div>
      </div>

      {/* 主標 */}
      <div className="main-theme">
        <h2>讓學習成為一種習慣</h2>
      </div>

      {/* 推薦課程 */}

      <div className="recommended-courses">
        <h2>推薦課程</h2>

        <div className="card-box">
          <div className="course-card">
            <figure><img src="../public/images/unity.jpg" alt="Unity 5" /></figure>
            <h3>Unity 5</h3>
            <p className="content">最新的Unity公開課程，讓你一步一步做出自己心目中理想的遊戲。</p>
            <p>講師:xxx</p>
            <p>影音課程時數:4小時</p>
            <p>
              <span className="original-price">原價: NT$ 1600 </span>
              <span className="newprice">NT$ 1200</span>
            </p>
            <button>付款上課去</button>
          </div>

          <div className="course-card">
            <figure><img src="../public/images/gamesalad.jpg" alt="GameSalad" /></figure>
            <h3>GameSalad 2D遊戲製作</h3>
            <p className="content">學習遊戲設計與2D動畫技巧。學習遊戲設計與2D動畫技巧。</p>
            <p>講師:xxx</p>
            <p>影音課程時數:8小時</p>
            <p>
              <span className="original-price">原價: NT$ 1600 </span>
              <span className="newprice">NT$ 1200</span>
            </p>
            <button>付款上課去</button>
          </div>

          <div className="course-card">
            <figure><img src="../public/images/gwd.jpg" alt="Google Web Design" /></figure>
            <h3>Google Web Design</h3>
            <p className="content">
              學習HTML5網站設計，實現豐富動畫效果。
            </p>
            <p>講師:xxx</p>
            <p>影音課程時數:8小時</p>
            <p>
              <span className="original-price">原價: NT$ 1600 </span>
              <span className="newprice">NT$ 1200</span>
            </p>
            <button>付款上課去</button>
          </div>
        </div>
      </div>
      {/* 頁腳 */}
      <footer className="footer">
        <p>Copyright © 2024.11.12 余季嬛. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
>>>>>>> cc9b6e65f6cfe8ca261f922c0be3805b3a99b053
