import React from 'react';

import Header from './Header';
import History from './History';
import Origins from './Origins';
import Culture from './Culture';
import Bandas from './Bandas';
import Footer from './Footer';

export default function Main() {


    return (
        <div className="container">
            <Header />
            <History />
            <Origins />
            <Culture />
            <Bandas />
            <Footer />
        </div>
    )
}