import { useRef } from "react"


export default function App(){
  const blueRef = useRef(null);
  const yellowRef = useRef(null);

  const goyellow=()=>{
    window.scrollTo({
      top:yellowRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  const goblue=()=>{
    window.scrollTo({
      top:blueRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  return (
    <>
    {/* 功能:點擊按鈕green往下捲動到green區域 */}
    <div ref={blueRef} style={{height:'600px' ,backgroundColor:'blue'}}>
      <button onClick={goyellow}>yellow</button>
    </div>

    <div ref={yellowRef} style={{height:'600px' ,backgroundColor:'yellow'}}>
      <button onClick={goblue}>blue</button>
    </div>
    
    </>
  )

}
