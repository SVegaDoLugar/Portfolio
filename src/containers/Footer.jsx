import React from 'react';
import '../styles/stylesContainers/Footer.scss';
import imgGitHub from '../assets/GitHub.png';
import imgLinkedIn from '../assets/LinkedIn.png';
import imgPlatzi from '../assets/Platzi.png';
import imgReact from '../assets/react.png'
const Footer = () =>{
    return(
        <footer>
        <section className="footer1">
            <ul className="imgList">
                <li>
                    <a href="https://github.com/SVegaDoLugar">
                        <figure className="imgSocialMedia">
                            <img src={imgGitHub}/>
                        </figure>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/samuel-j-vega-do-lugar-b13431172/">
                        <figure className="imgSocialMedia">
                            <img src={imgLinkedIn}/>
                        </figure>
                    </a>
                </li>    
                <li>
                    <a href="https://platzi.com/p/svegadolugar/">
                        <figure className="imgSocialMedia">
                            <img src={imgPlatzi}/>
                        </figure>
                    </a>
                </li>
            </ul>
        </section>
        <section className="footer2">
            <p>Creado en ReactJs</p>
            <figure className="imgSocialMedia imgReact"><img src={imgReact}/></figure>
        </section>
    </footer>
    )
}
export default Footer;