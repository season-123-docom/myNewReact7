//作業:看影片>寫入組件>交作業


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
