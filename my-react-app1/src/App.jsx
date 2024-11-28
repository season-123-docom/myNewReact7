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
