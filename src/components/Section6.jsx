import'../components/Section6.css'

import img6 from'../img/img6.svg'
import img8 from'../img/img8.svg'

function Section6 () {
    return(
        <>


<div className="section6">
  <div className="text6">Полезные материалы <div className="div1"></div></div>
  <div className="title3">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</div>

  <div className="card-parent6">
      
     <div className="card5">
       <img src={img6} alt="" />

      <div className="text5">
        Воистину радостный звук: шёпот бессменных лидеров
      </div>

      <div className="date">
        24 апр. 2023 г.
        <div className="div5"></div>
      </div>
      
      <div className="title5">
        Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений. 
      </div>
     </div>


         <div className="card5">
       <div className="img7"></div>

      <div className="text5">
        Воистину радостный звук: шёпот бессменных лидеров
      </div>

      <div className="date">
        24 апр. 2023 г.
        <div className="div5"></div>
      </div>
      
      <div className="title5">
        Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений. 
      </div>
     </div>


         <div className="card5">
       <img src={img8} alt="" />

      <div className="text5">
        Воистину радостный звук: шёпот бессменных лидеров
      </div>

      <div className="date">
        24 апр. 2023 г.
        <div className="div5"></div>
      </div>
      
      <div className="title5">
        Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений. 
      </div>
     </div>

  </div>
  <button className='btn3'>Все новости</button>
</div>
        </>
    )
}
export default Section6