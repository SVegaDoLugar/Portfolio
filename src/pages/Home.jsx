import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import PreFooter from '../containers/PreFooter';
import Layout from '../containers/Layout';
import '../styles/stylesPages/Home.scss';
import Photo from '../assets/Photo.png'
const Home = () => {
    return (
        <Layout>
            <Header/>
            <main className="homeSection">
                <section className='homeSection_title'>
                    <h1>Samuel José Vega Do Lugar</h1>
                </section>
                <section className="homeSection_1">
                    <picture><img className="imgPhoto" src={Photo}/></picture>
                </section>
                <section className="homeSection_2">
                    <p>
                        Estudiante de tecnolog&iacute;a en an&aacute;lisis y desarrollo de sistemas de informaci&oacute;n (SENA) con conocimientos b&aacute;sicos en desarrollo web frontend (1), NodeJs (2), ReactJs (3) y JAVA (4), con &aacute;nimos de desarrollar las habilidades adquiridas durante mi proceso de formaci&oacute;n. Adem&aacute;s cuento con experiencia de 5 años en el campo de la investigaci&oacute;n cient&iacute;fica en ciencias sociales y humanas (Excel Avanzado, SPSS), y contabilidad (software Siigo).  
                    </p>
                </section>   
            </main>
            <PreFooter/>
            <Footer/>
        </Layout>  
    );
}

export default Home;