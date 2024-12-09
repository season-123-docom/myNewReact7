//導入外部CSS檔案
import "./App.css";


//建立新的元件 
function MyComponent() {
  return (
    //超過2個元件應使用fragment空標籤<></>將元件包起來
    <> 
      <h1>React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptas iste sed at perspiciatis aperiam quisquam, vel veniam autem quibusdam eum atque reiciendis nulla voluptatibus provident sunt perferendis vitae sequi!</p>
    </>
  )
}
function App() {

  //建立變數
  const strName="建仔";

  return (
    <div>
      {/* JSX中使用Javscript變數，前後加大括號{變數名稱} */}
      <h1 className="underLine-Color" style={{
        color:'red',
        backgroundColor:'yellow',
        width:'300px',
      }}>{strName.toLocaleUpperCase()},午安</h1>
      {/* 屬性中使用變數 */}
      <label className="underLine-Color" htmlFor="userName">請輸入姓名</label>
      <input type="text"id="userName"placeholder={strName}/>
      {/* <MyComponent /> */}
    </div>
  )
}

export default App
