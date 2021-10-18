import React from "react";
import {Link} from "react-router-dom";

import Home from "../../butoon_home/ButtonHome";

import australiano from "../../../img/acdc/australiano.jpg";
import tnt from "../../../img/acdc/tnt.jpg";
import high_voltage from "../../../img/acdc/high_voltage.jpg";
import ddddc from "../../../img/acdc/ddddc.jpg";
import Let_There_Be_Rock from "../../../img/acdc/Let_There_Be_Rock.jpg";
import Powerage from "../../../img/acdc/Powerage.jpg";
import Highway_to_Hell from "../../../img/acdc/Highway_to_Hell.jpg";
import black_in_black from "../../../img/acdc/black_in_black.jpg";
import For_Those_About_to_Rock from "../../../img/acdc/For_Those_About_to_Rock.jpg";
import Flick_of_the_Switch from "../../../img/acdc/Flick_of_the_Switch.jpg";
import Fly_on_the_Wall from "../../../img/acdc/Fly_on_the_Wall.jpg";
import Who_Made_Who from "../../../img/acdc/Who_Made_Who.jpg";
import Blow_Up_Your_Video from "../../../img/acdc/Blow_Up_Your_Video.jpg";
import The_Razors_Edge from "../../../img/acdc/The_Razors_Edge.jpg";
import Ballbreaker from "../../../img/acdc/Ballbreaker.jpg";
import Stiff_Upper_Lip from "../../../img/acdc/Stiff_Upper_Lip.jpg";
import Black_Ice from "../../../img/acdc/Black_Ice.jpg";
import Rock_or_Bust from "../../../img/acdc/Rock_or_Bust.jpg";
import powerup from "../../../img/acdc/powerup.jpg";


export default function Acdc(){
    return(
        <div>
            
            <div className="container">
                <div className="container-header">
                    <Link to="/historyAcdc">
                        <button type="button">Historias da Banda</button>
                    </Link>
                    <button type="button">Curiosidades da Banda</button>
                </div>
                <div className="main">
                    <h1>Álbuns</h1>
                    <Link to='/australiano'>
                        <button type="button" className="buttonBands"><img src={australiano} style={{width: "360px", height: "200px"}}/></button>
                    </Link>
                    <button type="button" className="buttonBands"><img src={tnt} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={high_voltage} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={ddddc} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Let_There_Be_Rock} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Powerage} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Highway_to_Hell} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={black_in_black} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={For_Those_About_to_Rock} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Flick_of_the_Switch} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Fly_on_the_Wall} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Who_Made_Who} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Blow_Up_Your_Video} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={The_Razors_Edge} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Ballbreaker} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Stiff_Upper_Lip} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Black_Ice} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={Rock_or_Bust} style={{width: "360px", height: "200px"}}/></button>
                    <button type="button" className="buttonBands"><img src={powerup} style={{width: "360px", height: "200px"}}/></button>
                </div>
                <Home />
            </div>
        </div>
    )
}