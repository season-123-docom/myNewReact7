

import { useEffect } from "react";
import axios from "axios";
import "./style.css";
import { IoUmbrella } from "react-icons/io5";

function App() {
  useEffect(() => {
    (async () => {
      // 本地端要在web-server伺服器下才可以執行
      //const data = await axios.get("./F-C0032-001.json");

      //json的連結必須是公開網址下的來源
      const data = await axios.get("https://season-123-docom.github.io/myNewReact7/");
      // console.log = (data)

      const{ location } =data.data.cwaopendata.dataset;
      // console.log(location);

      // const { location } = data.data.cwaopendata.dataset;
      // const options = { hour: "numeric", minute: "numeric" };
      // console.log(location);

      //locationName => 縣市名
      //elementName => Wx => 天氣概況
      //elementName => PoP => 降雨率

    
      
    })()
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
              <div className="card-title">{city.locationName}</div>
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
