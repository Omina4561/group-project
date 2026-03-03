import '../components/Section1.css'
import img from '../img/текстовый логотип.svg'
import img1 from '../img/menu_burger.svg'
export default function Section1(){
    return(
        <>
        <div className="section-1">
            <header>
                <div className="container">
                    <div className="head-parent">
                        <img src={img} alt="" />
                        <nav className="links">
                            <a href="">Услуги</a>
                            <a href="">О компании</a>
                            <a href="">Наши юристы</a>
                            <a href="">Отзывы</a>
                            <a href="">О компании</a>
                            <a href="">Контакты</a>
                        </nav>
                        <img src={img1} alt="" className='menu'/>
                    </div>
                </div>
            </header>
            <div className="section-1-text-parent">
                <div className="text-1">Оказываем весь комплекс</div>
                <div className="title">Юридических услуг</div>
                <div className="text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение.</div>
                <button>Наши услуги</button>
            </div>
           
        </div>
        </>
    )
}