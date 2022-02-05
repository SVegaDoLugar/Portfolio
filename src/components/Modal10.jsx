import React from 'react';
import imgModalUbuntu from "../assets/ubuntu.png";
import '../styles/stylesComponents/Modals.scss';
const Modal10 = ({children}) => {
    return (
        <section className="modal">
            <section className="modalContainer">
                <img className="modalImg" src={imgModalUbuntu}/>
                <h1 className="modalTitle">Ubuntu</h1>
                <p className="modalParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut molestiae dicta blanditiis? Aliquid ad, dolores vero incidunt architecto ab eos et ut numquam omnis!.</p>
                <section>
                    {children}
                </section>
            </section>
        </section>
    );
}

export default Modal10;