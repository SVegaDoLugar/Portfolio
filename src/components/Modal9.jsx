import React from 'react';
import imgModalNodeJs_2 from "../assets/NodeJs_2.png";
import '../styles/stylesComponents/Modals.scss';
const Modal9 = ({children}) => {
    return (
        <section className="modal">
            <section className="modalContainer">
                <img className="modalImg" src={imgModalNodeJs_2}/>
                <p className="modalParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut molestiae dicta blanditiis? Aliquid ad, dolores vero incidunt architecto ab eos et ut numquam omnis!.</p>
                <section>
                    {children}
                </section>
            </section>
        </section>
    );
}

export default Modal9;