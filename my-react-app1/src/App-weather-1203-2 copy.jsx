//記得清空存檔，vite只能執行這個頁面的樣子

import { useEffect } from "react";
import axios from "axios";
import "./style.css";
import { IoUmbrella } from "react-icons/io5";
import ShowCity from "../showCity";

function App() {
  const [weather, setWeatherList]= useState([]);



  useEffect(() => {
    (async () => {
      // 本地端要在web-server伺服器下才可以執行
      //const data = await axios.get("./F-C0032-001.json");

      //json的連結必須是公開網址下的來源
      const data = await axios.get("https://season-123-docom.github.io/myNewReact7/");
      // console.log = (data)

      const{ location } =data.data.cwaopendata.dataset;
      // console.log(location);

      // const { location } = data.data.cwaopendata.dataset; m/4
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
        <ShowCity/>
       
      </div>
    </>
  );
}
export default App;
