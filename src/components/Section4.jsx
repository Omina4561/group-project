import'../components/Section4.css'

import img1 from'../img/img1.svg'
import img2 from'../img/img2.svg'
import img3 from'../img/img3.svg'
 

function Section4 () {
    return(
        <>
       
 <div className="section3">
  
      <div className="text3">Наши юристы <div className="div3"></div></div>

      <div className="title3">
        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона
      </div>

      <div className="card-parent3">
        <div className="card3">
             
             <img className='img1' src={img1} alt="" />

             
             <div className="name">Горюнова Полина Алексеевна</div>

             <div className="job">Юрист международного права</div>
        </div>

              <div className="card3">
             
             <img className='img1' src={img2} alt="" />

             
             <div className="name">Горюнова Полина Алексеевна</div>

             <div className="job">Юрист международного права</div>
        </div>

              <div className="card3">
             
             <img className='img1' src={img3} alt="" />

             
             <div className="name">Горюнова Полина Алексеевна</div>

             <div className="job">Юрист международного права</div>
        </div>

   

                 <div className="card3">
             
             <img className='img1' src={img1} alt="" />

             
             <div className="name">Горюнова Полина Алексеевна</div>

             <div className="job">Юрист международного права</div>
        </div>
      </div>

</div>


        </>
    )
}
export default Section4