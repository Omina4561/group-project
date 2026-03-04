
import'../components/Section5.css'

import rasm1 from '../img/rasm1.svg'

import rasm2 from '../img/rasm2.svg'

import img4 from'../img/img4.svg'
import img5 from'../img/img5.svg'
function Section5 () {
    return(
        <>
        

        
<div className="section4">
  <div className="container4">
    <div className="text4">Что о нас говорят клиенты <div className="div2"></div></div>

    <img className='rasm1' src={rasm1} alt="" />

    <div className="card-parent4">
      <div className="card4">
        <div className="top">
            <img src={img4} alt="" />

            <div className="mini-text4">
              <div className="job2">ООО “ИТ Консалтинг”</div>
              <div className="name2">Логинова Анастасия</div>
            </div>

            <img className='rasm2' src={rasm2} alt="" />
        </div>
        <div className="title4">
              Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов ...
            </div>
      </div>


   <div className="card4">
        <div className="top">
            <img src={img5} alt="" />

            <div className="mini-text4">
              <div className="job2">ООО “ИТ Консалтинг”</div>
              <div className="name2">Логинова Анастасия</div>
            </div>

            <img className='rasm2' src={rasm2} alt="" />

           
        </div>
         <div className="title4">
              Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов ...
            </div>
      </div>
      
    </div>
        <div className="div-btn">
  <button className='btn1'>Все отзывы</button>
  <button className='btn2'>Написать отзыв</button>
      </div>
  </div>
</div>
        </>
    )
}
export default Section5