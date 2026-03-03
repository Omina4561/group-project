import '../components/Section3.css'
import img from '../img/фотография.svg'

export default function Section3() {
    return (
        <>
            <section className="section-3">
                <div className="container">
                    <div className="parent">
                        <div className="text-parent">
                            <div className="section-3-title">Юридическая компания <span>правозащитник</span></div>
                            <div className="section-3-text">
                                Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение.
                                <br />
                                <br />
                                Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.
                                <br />
                                <br />
                                За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                            </div>
                            <div className="buttons">
                                <button className='btn1'>История компании</button>
                                <button className='btn2'>Сертификаты</button>
                            </div>
                        </div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}