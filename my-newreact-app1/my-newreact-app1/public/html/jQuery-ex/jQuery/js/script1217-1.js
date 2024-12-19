$(function(){
    var mdwBtn=$('.modalBtn'); //取得彈出視窗按鈕
    var OverlayOpacity = 0.7; //背景透明度變數
    var fadeTime = 500;  //漸進時間變數

    mdwBtn.on('click', function (e){ 
        //取消預設動作
        e.preventDefault();

        var setMdw=$(this),
        setHref = setMdw.attr('href'),
        setSource =$(setHref).htmlPrefilter(),
        wdHeight = $();
    
    })
       

    }
)