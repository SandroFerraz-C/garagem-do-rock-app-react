import React from 'react';
import {Link} from "react-router-dom";


import './style.css'

export default function ButtonHome(){
    return (
        <div className="container">
            <Link to="/">
                <button className="buttonhome">
                    Home
                </button>
            </Link>
        </div>
    )
}