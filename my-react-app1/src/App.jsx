//記得清空存檔，vite只能執行這個頁面的樣子

import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    async () => {
      const data = await axios.get("./F-C0032-001.json");
      const { location } = data.data.cwaopendata.dataset;
      const options = {hour:'numeric', minute:'numeric'};
      console.log(location);
    };
  }, []);

  return (
    <>
      <h2>36小時天氣預報</h2>
      <h2>三十六小時天氣預報</h2>

      {/* 台北市 */}
      <div class="taipei">
        {/* 2日白天 */}
        <div class="day">
          <h3>台北市</h3>
          <h4>2日</h4>
          <p>上午6:00~下午6:00</p>
          <figure>
            <img src="../public/weatherIcon/weatherIcon/晴時多雲.svg" alt="晴時多雲"></img>
          </figure>
          <p>晴時多雲</p>
          <p>
            <img class="raining-icon" src="../public/weatherIcon/weatherIcon/降雨.jpg" alt="降雨"></img>10%
          </p>
        </div>

        {/* 2日晚上 */}
        <div class="night">
          <h3>台北市</h3>
          <h4>2日</h4>
          <p>下午6:00~上午6:00</p>
          <figure>
            <img src="../public/weatherIcon/weatherIcon/多雲時晴.svg" alt="多雲時晴"></img>
          </figure>
          <p>多雲時晴</p>
          <p>
            <img src="../public/weatherIcon/weatherIcon/降雨.jpg" alt="降雨"></img>20%
          </p>
        </div>
        {/* 3日白天 */}
        <div class="tomorrow">
          <h3>台北市</h3>
          <h4>3日</h4>
          <p>上午6:00~下午6:00</p>
          <figure>
            <img src=""></img>
          </figure>
          <p>晴時多雲</p>
          <p>
            <img></img>20%
          </p>
        </div>
      </div>
    </>
  );
}
export default App;
