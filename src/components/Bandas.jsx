import React from "react";
import {Link} from "react-router-dom";

import acdc from "../../src/img/acdc/acdc.png";
import aerosmith from "../../src/img/aerosmith/aerosmith.png";
import angra from "../../src/img/angra/angra.jpg";
import "./style.css";
export default function Bandas(){
    return(
        <div className="container ">
            <div className="bands">
               
               <Link to='/acdc'>
                   <button type="button" className="buttonBands"><img src={acdc} style={{width: "360px", height: "200px"}}/></button>
                </Link>
                
                <Link to="/aerosmith">
                    <button type="button" className="buttonBands"><img src={aerosmith} style={{width: "360px", height: "200px"}}/></button>
                </Link>

                <Link to="/angra">
                    <button type="button" className="buttonBands"><img src={angra} style={{width: "360px", height: "200px"}}/></button>
                </Link>
                
            </div>

        </div>
    )
}