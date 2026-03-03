import '../components/Header1.css'
import img from '../img/phone.svg'
import img1 from '../img/mail.svg'
export default function Header1(){
    return(
        <>
        <header className="header-1">
            <div className="container">
                <div className="header-1-parent">
                    <div className="head-left">
                        <nav className="phone-num">
                            <img src={img} alt="" />
                            <p>+7 (922) 022-94-82</p>
                        </nav>
                        <div className="email">
                            <img src={img1} alt="" />
                            <p>janis62@yahoo.com</p>
                        </div>
                    </div>
                    <a href="">Заказать звонок</a>
                </div>
            </div>
        </header>
        </>
    )
}