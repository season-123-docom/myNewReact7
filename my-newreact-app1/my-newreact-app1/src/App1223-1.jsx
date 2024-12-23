import img1 from "/images2/01.jpg";
import img2 from "/images2/02.jpg";
import img3 from "/images2/03.jpg";
import img4 from "/images2/04.jpg";
import { useState } from "react";

export default function App() {
  //建立useState
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  //建立圖片陣列
  const arrPhotos = [img1, img2, img3, img4];

  return (
    <>
      <div className="wrapper">
        {/* 縮圖區 */}
        <div
          style={{
            display: "flex",
            width: "600px",
            justifyContent: "space-around",
            margin: "50px auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            {/* 方法1:直接放入照片 */}
            {/* <img
              className="smallImg"
              src={arrPhotos[0]}
              alt="photos"
              width={100}
              height={80}
            />
            <img
              className="smallImg"
              src={arrPhotos[1]}
              alt="photos"
              width={100}
              height={80}
            />
            <img
              className="smallImg"
              src={arrPhotos[2]}
              alt="photos"
              width={100}
              height={80}
            />
            <img
              className="smallImg"
              src={arrPhotos[3]}
              alt="photos"
              width={100}
              height={80}
            /> */}

            {/* 方法2:用map找照片資料 */}

            {arrPhotos.map((photo, index) => {
              return (
                <img
                  key={index}
                  src={photo}
                  alt="photos"
                  width={100}
                  height={80}
                  onMouseOver={(e) => setCurrentImgIndex(index)}
                  style={{cursor:"pointer"}}
                />
              );
            })}
          </div>
        </div>

        {/* 大圖區 */}
        <div className="bigNail">
          <img
            src={arrPhotos[currentImgIndex]}
            alt="photos"
            width={480}
            height={350}
          />
        </div>
      </div>
    </>
  );
}
