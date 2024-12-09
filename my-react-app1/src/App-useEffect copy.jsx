//記得清空存檔，vite只能執行這個頁面的樣子

import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  //每一次rendor後執行
  // useEffect(()=>{});
  useEffect(() => {
    console.log(1);
  });

  //只執行一次(開啟檔案時)
  // useEffect(()=>{},[]);
  useEffect(() => {
    console.log(2);
    //按鈕監聽事件
    //取得按鈕
    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", () => {
      //取得段落
      let p1b = document.getElementById("p1");
      //再變色
      p1b.style.color = "red";
    });
  }, []);

  //當陣列中依賴條件改變時，就會執行
  // useEffect(()=>{},[count]);
  useEffect(() => {
    console.log(3);
  }, [count]);

  return (
    <>
      {console.log(0)}
      <h1>useEffect</h1>
      <hr />
      <p id="p1">我是段落</p>
      <button
        onClick={() => {
          // 綁定事件
          // 取得段落
          let p1 = document.getElementById("p1");

          //再變色
          p1.style.color = "blue";
        }}
      >
        變藍色
      </button>

      {/* 監聽事件寫法 */}
      <button id="btn2">變紅色</button>
      {/* 呼叫函式 */}
      {/* 等待被執行，事件名稱函式不要加小括號(加小括號=點擊後立即處發函式) */}
      <button id="btn3" onClick={changeColor}>  
        變綠色
      </button>
    </>
  );
}
export default App;
