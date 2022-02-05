import React from 'react';
import imgModalGitHub from "../assets/GitHub.png";
import '../styles/stylesComponents/Modals.scss';
const Modal7 = ({children}) => {
    return (
        <section className="modal">
            <section className="modalContainer">
                <img className="modalImg" src={imgModalGitHub}/>
                <h1 className="modalTitle">Git y GitHub</h1>
                <p className="modalParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut molestiae dicta blanditiis? Aliquid ad, dolores vero incidunt architecto ab eos et ut numquam omnis!.</p>
                <section>
                    {children}
                </section>
            </section>
        </section>
    );
}

export default Modal7;