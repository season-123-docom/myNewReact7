//記得清空存檔，vite只能執行這個頁面的樣子

//20241113上課進度3
import {useState} from "react"

function App(){
  //定義變數name與setName的方法
  const [name, setName]=useState('');
  const [name2, setName2]=useState('');



  function changeName(e){
    setName2(e.target.value);
  }
 
  return(
      <>
      <h2>設計一個輸入名字欄位，並且即時顯示出來</h2>
      <hr/>
      <h3>目前文字方塊的內容:{name}</h3>
      請輸入姓名:<input type="text" value={name} onChange={(e)=>{
        //console.log(e);
        setName(e.target.value);
      }}/>  {name}
      {/* 使用value一定要有onChange={()=>{}},event=事件參數，縮寫e*/}
      <br/>
      請輸入姓名2:<input type="text" value={name2} onChange={changeName}/>{name2}
      
      
      
      <h3>teeeeeest</h3> 


      </>
  )
}
export default App