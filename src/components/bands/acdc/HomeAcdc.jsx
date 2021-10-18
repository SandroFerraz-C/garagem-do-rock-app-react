import React from 'react';
import {Link} from "react-router-dom";


export default function HomeAcdcd(){
    return(
        <div >
            <Link to="/acdc">
                <button className="voltarAcdc">Voltar para AC/DC</button>
            </Link>
        </div>
    )
}