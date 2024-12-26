import { useEffect, useState } from "react";

export default function App() {
  //建立目前背景圖片的變數
  const [currentImgIndex, setcurrentImgIndex] = useState(0);

  // 建立輪播圖片的陣列物件
  const slides = [
    { url: "./images2/06.jpg", title: "photo-1" },
    { url: "./images2/07.jpg", title: "photo-2" },
    { url: "./images2/08.jpg", title: "photo-3" },
    { url: "./images2/09.jpg", title: "photo-4" },
  ];
  //當currentImgIndex改變時，會觸發useEffect
  useEffect(() => {
    //每3秒呼叫nextSlide()換下一張圖
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);

    //每3秒後，移除autoplay，這樣才能取得最新的索引編號
    return () => clearInterval(autoplay);
  }, [currentImgIndex]);

  //下一張
  const nextSlide = () => {
    //取得前一張的索引編號，檢查是否為最後一個編號
    //是=>回到第一張
    //否=>跳到下一張
    setcurrentImgIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  //上一張
  const preSlide = () => {
    //取得前一張的索引編號，檢查是否為第一個編號
    //是=>跳到最後張
    //否=>跳到前一張
    setcurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  //建立左右icon
  const Arrow = (direction, onClick) => {
    return (
      //擺放icon的區域
      <div
        style={{
          position: "absolute",
          top: "50%",
          cursor: "pointer",
          color: "white",
          [direction]: "10px", //將icon拆開,並調整左右留白間距
        }}
      >
        {direction === "left" ? (
          <FaChevronCircleLeft size={50} onClick={onClick} />
        ) : (
          <FaChevronCircleRight size={50} onClick={onClick} />
        )}
      </div>
    );
  };

  return (
    <>
      {/* 滿版最外層 */}
      <div
        className="wrapper"
        style={{
          maxWidth: "100vw",
          height1: "100vh",
          margin: "auto",
        }}
      >
        {/* 背景輪播區 */}
        <div
          style={{
            backgroundImage: `url(${slides[0].url})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
          }}
        >
          {/* 文字區 */}
          <h2 style={{ color: "red" }}>{slides[currentImgIndex].title}</h2>
          {/* 上一張 */}
          <Arrow direction="left" onClick={preSlide} />
          {/* 下一張 */}
          <Arrow direction="right" onClick={preSlide} />
        </div>
      </div>
    </>
  );
}
