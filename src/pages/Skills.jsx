import React, {useContext, useState} from 'react';
import Layout from '../containers/Layout';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import '../styles/stylesPages/Skills.scss';
import imgHtml from "../assets/HtmlImage.png";
import imgCss from "../assets/CssImage.png";
import imgJs_1 from "../assets/JsImage_1.png";
import imgSQL from "../assets/SQL.png";
import imgJava from "../assets/Java.svg";
import imgXls from "../assets/xls.png";
import imgReact from"../assets/react.png"
import imgGitHub from "../assets/GitHub.png";
import imgNodeJs from "../assets/NodeJs.jpg";
import imgUbuntu from "../assets/ubuntu.png";
import imgCode from "../assets/Code.png";
import imgNetBeans from "../assets/NetBeans.png";
import useModal from "../hooks/useModal.js";
import Modal1 from '../components/Modal1';
import Modal2 from '../components/Modal2';
import Modal3 from '../components/Modal3';
import Modal4 from '../components/Modal4';
import Modal5 from '../components/Modal5';
import Modal6 from '../components/Modal6';
import Modal7 from '../components/Modal7';
import Modal8 from '../components/Modal8';
import Modal9 from '../components/Modal9';
import Modal10 from '../components/Modal10';
import Modal11 from '../components/Modal11';
import Modal12 from '../components/Modal12';
import CloseModal from '../components/CloseModal';

const Skills = () => {
    const usingModal1 = useModal(), usingModal2 = useModal(), usingModal3 = useModal(), usingModal4 = useModal();
    const usingModal5= useModal(), usingModal6 = useModal(), usingModal7 = useModal(), usingModal8 = useModal();
    const usingModal9= useModal(), usingModal10 = useModal(), usingModal11 = useModal(), usingModal12 = useModal();
    
    return (
        <Layout>
            <Header/>
            <section className="skillsMainHeader">
                <h1>Skill Set - Habilidades</h1>
            </section>
            <section className="skillsMainSection">
                <section className="skillsMainGrid">
                    
                    <section  className="gridSection">
                        <picture onClick={usingModal1.handleModalState}>
                            <img src={imgHtml}/>
                        </picture>
                    </section>
                    {usingModal1.modalState ? (
                                <Modal1>
                                    <section onClick={usingModal1.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal1>
                    ): null}

                    <section className="gridSection">
                        <picture onClick={usingModal2.handleModalState}>
                            <img src={imgCss}/>
                        </picture>
                    </section>
                    {usingModal2.modalState ? (
                                <Modal2>
                                    <section onClick={usingModal2.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal2>
                    ): null}
                    
                    <section className="gridSection">
                        <picture onClick={usingModal3.handleModalState}>
                            <img src={imgJs_1}/>
                        </picture>
                    </section>
                    {usingModal3.modalState ? (
                                <Modal3>
                                    <section onClick={usingModal3.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal3>
                    ): null}

                    <section  className="gridSection">
                        <picture onClick={usingModal4.handleModalState}>
                            <img src={imgSQL}/>
                        </picture>
                    </section>
                    {usingModal4.modalState ? (
                                <Modal4>
                                    <section onClick={usingModal4.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal4>
                    ): null}

                    <section className="gridSection">
                        <picture onClick={usingModal5.handleModalState}>
                            <img className="imgBorder" src={imgJava}/>
                        </picture>
                    </section>
                    {usingModal5.modalState ? (
                                <Modal5>
                                    <section onClick={usingModal5.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal5>
                    ): null}

                    <section onClick={usingModal6.handleModalState} className="gridSection">
                        <picture>
                            <img src={imgXls}/>
                        </picture>
                    </section>
                    {usingModal6.modalState ? (
                                <Modal6>
                                    <section onClick={usingModal6.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal6>
                    ): null}

                    <section className="gridSection">
                        <picture onClick={usingModal7.handleModalState}>
                            <img src={imgGitHub}/>
                        </picture>
                    </section>
                    {usingModal7.modalState ? (
                                <Modal7>
                                    <section onClick={usingModal7.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal7>
                    ): null}

                    <section className="gridSection">
                        <picture onClick={usingModal8.handleModalState}>
                            <img src={imgReact}/>
                        </picture>
                    </section>
                    {usingModal8.modalState ? (
                                <Modal8>
                                    <section onClick={usingModal8.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal8>
                    ): null}

                    <section className="gridSection">
                        <picture onClick={usingModal9.handleModalState}>
                            <img src={imgNodeJs}/>
                        </picture>
                    </section>
                    {usingModal9.modalState ? (
                                <Modal9>
                                    <section onClick={usingModal9.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal9>
                    ): null}

                    <section className="gridSection">
                        <picture onClick={usingModal10.handleModalState}>
                            <img src={imgUbuntu}/>
                        </picture>
                    </section>
                    {usingModal10.modalState ? (
                                <Modal10>
                                    <section onClick={usingModal10.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal10>
                    ): null}

                    <section className="gridSection">
                        <picture onClick={usingModal11.handleModalState}>
                            <img src={imgCode}/>
                        </picture>
                    </section>
                    {usingModal11.modalState ? (
                                <Modal11>
                                    <section onClick={usingModal11.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal11>
                    ): null}

                    <section className="gridSection">
                        <picture onClick={usingModal12.handleModalState}>
                            <img src={imgNetBeans}/>
                        </picture>
                    </section>
                    {usingModal12.modalState ? (
                                <Modal12>
                                    <section onClick={usingModal12.handleModalState}>
                                        <CloseModal />
                                    </section>
                                </Modal12>
                    ): null}

                </section>
            </section>
            <section className="skillsMainFooter">
                <p>Haz click sobre la imagen para ver m&aacute;s detalles.</p>
            </section>
            <Footer/>
        </Layout>
    ); 
}
export default Skills;