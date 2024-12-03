function ShowCity(){

    useEffect(() => {
        (async () => {
          // 本地端要在web-server伺服器下才可以執行
          //const data = await axios.get("./F-C0032-001.json");
    
          //json的連結必須是公開網址下的來源
          const data = await axios.get("https://season-123-docom.github.io/myNewReact7/");
          // console.log = (data)
    
          const{ location } =data.data.cwaopendata.dataset;
          // console.log(location);
          location.map((city)=>{
            return <div>{city.locationName}</div>
          })
    
          // const { location } = data.data.cwaopendata.dataset;
          // const options = { hour: "numeric", minute: "numeric" };
          // console.log(location);
    
          //locationName => 縣市名
          //elementName => Wx => 天氣概況
          //elementName => PoP => 降雨率
    
        
          
        })()
      }, []);
    return (

    <p>city</p>
    
)}
export default ShowCity

