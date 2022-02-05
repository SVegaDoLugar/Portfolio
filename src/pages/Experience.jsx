import React from 'react';
import Layout from '../containers/Layout';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import '../styles/stylesPages/Experience.scss';
const Experience = () => {
    return (
        <Layout>
            <Header/>
            <section className="mainExperience">
                <section className='sectionExperience'>
                    <h1 className='tittleExperience'>
                        Psic&oacute;logo investigador.
                    </h1>
                    <h1 className="periodExperience">
                        Universidad Sim&oacute;n Bol&iacute;var (2018-2021)
                    </h1>
                    <p className='paragraphExperience'>
                        1. Desarrollo de proyectos de investigación.
                    </p>
                    <p className='paragraphExperience'>
                        2. Aplicación de metodología cualitativa y cuantitativa.
                    </p>
                    <p className='paragraphExperience'>
                        3. Manejo de base de datos en excel y SPSS.
                    </p>
                </section>

                <section className='sectionExperience'>
                    <h1 className='tittleExperience'>
                        Digitador.
                    </h1>
                    <h1 className="periodExperience">
                        (2019)
                    </h1>
                    <p className='paragraphExperience'>
                        1. Desarrollo de proyectos de investigación.
                    </p>
                    <p className='paragraphExperience'>
                        2. Aplicación de metodología cualitativa y cuantitativa.
                    </p>
                    <p className='paragraphExperience'>
                        3. Manejo de base de datos en excel y SPSS.
                    </p>
                </section>
            </section>
            <Footer/>
        </Layout>
        
    );
}

export default Experience;