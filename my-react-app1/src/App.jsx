//記得清空存檔，vite只能執行這個頁面的樣子

import { useEffect } from "react";
import axios from "axios";
import "./style.css";
import { IoUmbrella } from "react-icons/io5";

function App() {
  useEffect(() => {
    async () => {
      const data = await axios.get("./F-C0032-001.json");
      const { location } = data.data.cwaopendata.dataset;
      const options = { hour: "numeric", minute: "numeric" };
      console.log(location);
    };
  }, []);

  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        <h2>三十六小時天氣預報</h2>
        {/* 一列二欄 */}
        <div className="row">
          {/* 第一欄 */}
          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">台北市</div>
              {/* 內容 */}
              <div className="card-body">
                {/* 1列3欄 */}
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>上午6:00~下午6:00</p>
                    <figure>
                      <img
                        src="../public/weatherIcon/weatherIcon/晴時多雲.svg"
                        alt="晴時多雲"
                      ></img>
                    </figure>
                    <p>晴時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>

                  <div className="col2">
                    <p>2日</p>
                    <p>上午6:00~下午6:00</p>
                    <figure>
                      <img
                        src="../public/weatherIcon/weatherIcon/晴時多雲.svg"
                        alt="晴時多雲"
                      ></img>
                    </figure>
                    <p>晴時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>

                  <div className="col2">
                    <p>2日</p>
                    <p>上午6:00~下午6:00</p>
                    <figure>
                      <img
                        src="../public/weatherIcon/weatherIcon/晴時多雲.svg"
                        alt="晴時多雲"
                      ></img>
                    </figure>
                    <p>晴時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        
        <div className="col">
        <div className="card">
              {/* 標題 */}
              <div className="card-title">新北市</div>
              {/* 內容 */}
              <div className="card-body">
                {/* 1列3欄 */}
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>上午6:00~下午6:00</p>
                    <figure>
                      <img
                        src="../public/weatherIcon/weatherIcon/晴時多雲.svg"
                        alt="晴時多雲"
                      ></img>
                    </figure>
                    <p>晴時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>

                  <div className="col2">
                    <p>2日</p>
                    <p>上午6:00~下午6:00</p>
                    <figure>
                      <img
                        src="../public/weatherIcon/weatherIcon/晴時多雲.svg"
                        alt="晴時多雲"
                      ></img>
                    </figure>
                    <p>晴時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>

                  <div className="col2">
                    <p>2日</p>
                    <p>上午6:00~下午6:00</p>
                    <figure>
                      <img
                        src="../public/weatherIcon/weatherIcon/晴時多雲.svg"
                        alt="晴時多雲"
                      ></img>
                    </figure>
                    <p>晴時多雲</p>
                    <p><IoUmbrella />10%</p>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default App;
