import React from 'react';
import '../styles/global.scss';
const Layout = ({children}) => {
    return (
        <section className="Layout">
            {children}
        </section>
    );
}

export default Layout;