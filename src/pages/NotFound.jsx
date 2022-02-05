import React from 'react';
import Header from '../containers/Header';
import PreFooter from '../containers/PreFooter';
import Footer from '../containers/Footer';
import Layout from '../containers/Layout';
import '../styles/stylesPages/NotFound.scss';
const NotFound = () => {
    return (
        <Layout>
            <Header/>
            <section className="sectionNotFound">
                <h1 className="titleNotFound">
                    P&aacute;gina no encontrada
                </h1>
                <p className="paragraphNotFound">
                    Para dirigirte a otra secci&oacute;n de la p&aacute;gina web, puedes hacer click en los links de la zona inferior.
                </p>
            </section>
            <PreFooter/>
            <Footer/>
        </Layout>
    );
}

export default NotFound;