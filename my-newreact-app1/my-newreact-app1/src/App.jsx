import { useEffect } from "react";
// import './App.css';
import $ from "jquery";

export default function App() {
  useEffect(() => {
    //移入=>mouseover()
    //移出=>mouseout()
    //移動=>mousemove()
    //X、Y座標=>pageX、ageY
    //取得HTML內容=>html()
    // 淡入=>fadeIn()
    // 淡出=>fadeOute()
    // 速度=>毫秒=>(slow, normal, fast)
    //尋找指定名稱 => has()
    //新增html元素 => append()
    //取得子元素 => children()

    //監聽事件寫法

    //一般寫法 
    $('a:has(.ttpShow)').mouseover(function (e) {
        $('body').append(`<div id="ttpPanel">${$(this).children('.ttpShow').html()}</div>`);
        $('#ttpPanel')
          .css({
            top: (e.pageY + 10) + 'px',
            left: (e.pageX + 10) + 'px',
          }).fadeIn('fast');
      }).mouseout(function (e) { //不要點擊格式化文件，點擊之後會換行，程式碼就不會讀到相對應的指令!
        $('#ttpPanel').remove();
      }).mousemove(function (e) { //不要點擊格式化文件會換行，點擊之後會換行，程式碼就不會讀到相對應的指令!
        $('#ttpPanel').css({
          top: (e.pageY + 10) + "px",
          left: (e.pageX + 10)+ "px",
        });
      });
  }, []);

  return (
    <>
      <h2> ToolTip顯示說明</h2>
      <p>
        Lorem ipsum dolor sit amet
        <a href="#">
          consectetur
          <span className="ttpShow">consectetur內容說明</span>
        </a>
        adipisicing elit. Quae reprehenderit vel earum ab animi unde libero
        assumenda cum. Rerum nulla accusamus dignissimos recusandae inventore
        vel dolor nam magni porro repudiandae? Vel eaque id laborum tempora
        animi. Molestias obcaecati et, laboriosam facere quibusdam ducimus,
        voluptate natus quas sint sapiente odit optio est asperiores suscipit
        rerum temporibus quidem veritatis consequuntur veniam ullam. Voluptatem
        nemo iusto numquam dolore odio eos deserunt blanditiis quam possimus
        non? Voluptas in earum accusantium aut repellendus! Praesentium incidunt
        cumque eligendi vero odit vitae sit repellat quas ipsam dolores. Beatae
        in enim ullam fugiat error veniam adipisci quasi. Nobis dolorum animi
        voluptates, magnam asperiores quidem nihil? Dignissimos sint quo quod,
        dolor vitae iste explicabo magnam incidunt fugiat nihil ipsam. Possimus
        dolorem eius nobis, tenetur corporis tempora omnis nostrum odio dicta ex
        quo officiis dolore temporibus esse! Excepturi amet reprehenderit animi
        odit, nihil ducimus quaerat nulla nobis temporibus corporis nisi.
        Temporibus architecto ut a quas quasi iure tenetur, fuga labore magni
        consequuntur dolorem maiores quia unde neque veniam necessitatibus.
        Corporis quas earum expedita? Quia optio iste veritatis fugiat adipisci
        quam? Expedita incidunt praesentium aliquam minus accusamus ea labore
        esse magnam earum recusandae? Porro delectus doloremque odio, atque
        quasi ipsa nesciunt doloribus, ullam dolore dolorem saepe officia
        nostrum non possimus repellat? Necessitatibus quod vel blanditiis
        corrupti expedita earum et explicabo, dignissimos iste dolores ad
        voluptas a quae natus tenetur? Praesentium corporis voluptatem aperiam
        fugiat! Possimus nemo enim quibusdam assumenda, aliquid ab. Voluptatum
        iusto aspernatur cupiditate in ducimus quidem repellat voluptate culpa
        laboriosam repudiandae, odit voluptatem qui nesciunt ipsa accusantium
        nobis! Saepe recusandae maxime aperiam dignissimos voluptatem laudantium
        commodi in maiores veritatis. Voluptatem, perspiciatis adipisci! Laborum
        ipsum corrupti, dicta nostrum quisquam aut libero eum deleniti minima
        sed nam esse? Adipisci corrupti, voluptatum, neque odit possimus nobis
        sint minus nihil voluptatem nemo ab.
      </p>
    </>
  );
}
