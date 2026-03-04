
import'../components/Footer.css'

import logo from'../img/logo.svg'
import location from'../img/location.svg'
import tel from'../img/tel.svg'
import email from'../img/email.svg'
import img9 from'../img/img9.svg'

function Footer () {
    return(
        <>

<div className="footer">

   
        <div className="foot-top">
        <img src={logo} alt="" />

        <div className="foot-title">
            Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений.
        </div>

        <div className="foot-div"></div>
    </div>

 <div className="card-parent4">
       <div className="cards">

        <div className="box">
            <img className='img10' src={location} alt="" />

            <div className="mini-div3">
                <div className="h5">Наш адрес</div>
                <div className="h4">г. Одинцово, пр. Будапештсткая, 40</div>
            </div>
        </div>

         <div className="box">
            <img src={tel} alt="" />

            <div className="mini-div3">
                <div className="h5">Запись на консультанцию</div>
                <div className="h4">+7 (922) 022-94-82</div>
            </div>
        </div>

         <div className="box">
            <img src={email} alt="" />

            <div className="mini-div3">
                <div className="h5">Корреспонденция</div>
                <div className="h4">janis62@yahoo.com</div>
            </div>
        </div>
    </div>


    <div className="cards2">
        <nav className='nav1'>
            <a href="#">Услуги</a>
            <a href="#">О компании</a>
            <a href="#">Сертификаты</a>
            <a href="#">Отзывы</a>
            <a href="#"> Mатериалы</a>
            <a href="#">Благотворительность</a>
        </nav>
    </div>


    <div className="cards3">
   <div className="top3">
    <img src={img9} alt="" />

    <div className="mini-div4">
        <div className="name4">Миронов Александр</div>
        <div className="job4">Ведущий юрист</div>
    </div>

   </div>

   <div className="foot-title2">Есть над чем задуматься: тщательные исследования конкурентов разоблачены. Идейные соображения высшего порядка, а также перспективное планирование играет </div>

     <div className="btn4">Задать вопрос юристу</div>
    </div>

 </div>

 <div className="bottom">
    Все права защищены, 2023

    <div className="m">Политика обработки персональных данных</div>
</div>
    </div>

        </>
    )
}
export default Footer