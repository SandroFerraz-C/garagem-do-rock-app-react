import React from 'react';
import Main from './components/Main'
import Acdc from './components/bands/acdc/Acdc'
import Aerosmith from './components/bands/Aerosmith'
import Angra from './components/bands/Angra'
import ButtonHome from './components/butoon_home/ButtonHome'
import HistoryAcdc from './components/bands/acdc/HistoryAcdc'
import AcdcAustraliano from './components/bands/acdc/AcdcAustraliano'


import {Switch, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
      
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/acdc' component={Acdc} />
        <Route path='/aerosmith' component={Aerosmith} />
        <Route path='/angra' component={Angra} />
        <Route path='/' exact component={ButtonHome} />
        <Route path='/historyAcdc' exact component={HistoryAcdc} />
        <Route path='/australiano' exact component={AcdcAustraliano} />
      </Switch>
      
    </>
  );
}

export default App;
