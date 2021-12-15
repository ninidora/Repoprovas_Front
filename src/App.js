import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

import GlobalStyle from './layouts/GlobalStyles';
import Home from './pages/Home';

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Main />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}