import React from 'react';
import imgModalJs from "../assets/JsImage_2.png";
import '../styles/stylesComponents/Modals.scss';
const Modal3 = ({children}) => {
    return (
        <section className="modal">
        <section className="modalContainer">
            <img className="modalImg imgBorder" src={imgModalJs}/>
            <h1 className="modalTitle">JavaScript</h1>
            <p className="modalParagraph">Este lenguaje de programaci&oacute;n me ha permitido generar dinamismo a las p&aacute;ginas web que he desarrollado, as&iacute; como el ejecutar proyectos de programaci&oacute;n orientada a objetos.</p>
            <section>
                {children}
            </section>
        </section>
    </section>
    );
}

export default Modal3;