import React from 'react';
import imgModalCode from "../assets/Code.png";
import '../styles/stylesComponents/Modals.scss';
const Modal11 = ({children}) => {
    return (
        <section className="modal">
            <section className="modalContainer">
                <img className="modalImg" src={imgModalCode}/>
                <h1 className="modalTitle">VisualStudio Code</h1>
                <p className="modalParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut molestiae dicta blanditiis? Aliquid ad, dolores vero incidunt architecto ab eos et ut numquam omnis!.</p>
                <section>
                    {children}
                </section>
            </section>
        </section>
    );
}

export default Modal11;