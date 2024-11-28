<<<<<<< HEAD
//20241113上課進度

import { useState } from "react";

function App(){
  //常數=>不能變動的數
  //React執行中若要改變const值，必須使用useState方法
  //const num =0;
  //定義useState
  //const [變數名稱，更改變數的方法]=useState(初始值);
  const [num, setNum]=useState(0);

  function btnClick(){
    //修改num值
    setNum(num+5);
  }

  return(
      <>
      <h1>React狀態-useState方法</h1>
      <h2>目前的值:{num}</h2>
      {/* 事件綁定:使用箭頭函式 */}
      <button onClick={()=>{
        //num++;
        //console.log(num);
        setNum(num+1);
        }}>+1</button>

        {/* 事件綁定:呼叫函式 */}
        <button onClick={btnClick}>+5</button>
      </>
  )
}
=======
//20241113上課進度

import { useState } from "react";

function App(){
  //常數=>不能變動的數
  //React執行中若要改變const值，必須使用useState方法
  //const num =0;
  //定義useState
  //const [變數名稱，更改變數的方法]=useState(初始值);
  const [num, setNum]=useState(0);

  function btnClick(){
    //修改num值
    setNum(num+5);
  }

  return(
      <>
      <h1>React狀態-useState方法</h1>
      <h2>目前的值:{num}</h2>
      {/* 事件綁定:使用箭頭函式 */}
      <button onClick={()=>{
        //num++;
        //console.log(num);
        setNum(num+1);
        }}>+1</button>

        {/* 事件綁定:呼叫函式 */}
        <button onClick={btnClick}>+5</button>
      </>
  )
}
>>>>>>> cc9b6e65f6cfe8ca261f922c0be3805b3a99b053
export default App