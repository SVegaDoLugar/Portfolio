import React, { useContext, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Experience from '../pages/Experience';
import NotFound from '../pages/NotFound';
import '../styles/global.scss';

const App = () => {
    return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/Habilidades' element={<Skills/>} />
                    <Route path='/Experiencia' element={<Experience/>} />
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>

    );
}
export default App;