import React from 'react';
import imgModalSQL from "../assets/SQL.png";
import '../styles/stylesComponents/Modals.scss';
const Modal4 = ({children}) => {
    return (
        <section className="modal">
            <section className="modalContainer">
                <img className="modalImg" src={imgModalSQL}/>
                <h1 className="modalTitle">SQL</h1>
                <p className="modalParagraph">El conocimiento en este lenguaje de marcado me han permitido desarrollar p&aacute;ginas web y entender mucho m&aacute;s c&oacute;mo dividir las mismas por secciones, manteniendo as&iacute; un orden en el contenido y que este tenga una mayor legibilidad para otros programadores.</p>
                <section>
                    {children}
                </section>
            </section>
        </section>
    );
}

export default Modal4;