import React, {useState} from 'react';
import imgModalReact from "../assets/react.png";
import '../styles/stylesComponents/Modals.scss';
const Modal8 = ({children}) => {
    const [reactTest, stateReactTest] = useState(false);
    const [themeReact, updadeThemeReact] = useState("buttonReactLight");
    const handleStateReact = () => {
        stateReactTest(!reactTest);
        {reactTest ?
            updadeThemeReact("buttonReactLight"):
            updadeThemeReact("buttonReactDark")}
    };
    return (
        <section className="modal">
            <section className="modalContainer">
                <picture className="imgReact">
                    <img className="modalImg" src={imgModalReact}/>
                </picture>
                <h1 className="modalTitle">React</h1>
                <p className="modalParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut molestiae dicta blanditiis? Aliquid ad, dolores vero incidunt architecto ab eos et ut numquam omnis!.</p>
                <section className={themeReact}>     
                    <p onClick={handleStateReact} className="buttonReact" >
                        Prueba el modo oscuro creado con esta librer&iacute;a haciendo click aqu&iacute;.
                    </p>
                    <br></br>
                    <p>
                        Est&aacute;s en el modo {reactTest ? "oscuro" : "claro"}.
                    </p>
                </section>
                <section>
                    {children}
                </section>
            </section>
        </section>
    );
}

export default Modal8;