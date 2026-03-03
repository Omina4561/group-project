import '../components/Section2.css'
import img from '../img/agreement.svg'
import img2 from '../img/Vector.svg'

export default function Section2() {
    return (
        <>
            <section className="section-2">
                <div className="section-2-title">Наши услуги</div>
                <div className="section-2-text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</div>
                <div className="card-parent">
                    <div className="card">
                        <img src={img} alt="" className='hover-none-img' />
                        <img src={img2} alt="" className='hover-img' />
                        <div className="card-title">Банкротство физических лиц</div>
                        <div className="card-text">Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». </div>
                    </div>
                    <div className="card">
                        <img src={img} alt="" className='hover-none-img' />
                        <img src={img2} alt="" className='hover-img' />
                        <div className="card-title">Сопровождение сделок</div>
                        <div className="card-text">Инициирование, оформление, осуществление сделки и достижение результата — это именно то, чем мы занимаемся каждый день. </div>
                    </div>
                    <div className="card">
                        <img src={img} alt="" className='hover-none-img' />
                        <img src={img2} alt="" className='hover-img' />
                        <div className="card-title">Корпоративные споры</div>
                        <div className="card-text">Корпоративные споры – споры, связанные с созданием юрлица, управлением или участием в нем </div>
                    </div>
                    <div className="card">
                        <img src={img} alt="" className='hover-none-img' />
                        <img src={img2} alt="" className='hover-img' />
                        <div className="card-title"> Недвижимость и строительство</div>
                        <div className="card-text">Консультируем по различным вопросам в области недвижимости, включая градостроительное регулирование, земельные отношения</div>
                    </div>
                    <div className="card">
                        <img src={img} alt="" className='hover-none-img' />
                        <img src={img2} alt="" className='hover-img' />
                        <div className="card-title">Возврат страховых премий</div>
                        <div className="card-text">Для возврата страховой премии нужно подготовить следующий пакет документов: паспорт страхователя; оригинал страхового полиса</div>
                    </div>
                    <div className="card">
                        <img src={img} alt="" className='hover-none-img' />
                        <img src={img2} alt="" className='hover-img' />
                        <div className="card-title">Налоговое право и споры</div>
                        <div className="card-text">Сопровождение налоговых проверок на любой стадии, анализ и подготовка документов, защита при налоговых спорах. </div>
                    </div>
                </div>
                <button className='btn-1'>Все услуги</button>
            </section>
        </>
    )
}