import React from 'react';
import '../styles/stylesContainers/Header.scss';
const Header = () => {
    return (
        <header className="headerMenu">
            <div className="divNavBar"><span className="navBar" id="btnMenu"><i className="fas fa-bars"></i>Men&uacute;</span></div>
            <nav className="mainNav">
                <ul className="menuUl" id="menuUl">
                    <li className="menuUlItem"><a className="menuLink">Portafolio</a></li>
                    <li className="menuUlItem"><a className="menuLink">Habilidades</a></li>
                    <li className="menuUlItem"><a className="menuLink">Experiencia</a></li>
                    <li className="menuUlItem"><a className="menuLink">Contacto</a></li>
                    <li className="menuUlItem containerSubMenu">
                        <a href="#" className="menuLink subMenuBtn">Educaci&oacute;n<i className="fas fa-chevron-down"></i></a>
                        <ul className="subMenu">
                            <li className="menuUlItem"><a className="menuLink">ADSI - SENA</a></li>
                            <li className="menuUlItem"><a className="menuLink">Psicolog&iacute;a</a></li>
                            <li className="menuUlItem"><a className="menuLink">Ingenier&iacute;a de Sistemas</a></li>
                        </ul>
                    </li>
                </ul>  
            </nav>
        </header>
    );
}

export default Header;