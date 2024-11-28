//記得清空存檔，vite只能執行這個頁面的樣子

import { useState } from "react";

function App() {
  //使用者名稱
  const [inputUserName, setInputUserName] = useState("我是文字方塊");
  //縣市名
  const [selCity, setSelCity] = useState("請選擇");
  const cities = ["台北市", "桃園市", "新北市", "台中市", "高雄市", "台南市"];

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
    </>
  );
}
export default App;
