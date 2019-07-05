import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Board from './bannuComponents/Board'
import Square from './bannuComponents/Square'
import Game from './bannuComponents/Game'
import GameStart from './tiktoktoe/GameStart';


function App() {
  return (
//     <div>
    
//      <Game/>
// <br/>
//      <hr/>
// <br/>
//      <GameStart/>
    
//     </div>

<Router>
      <div>

        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/bannuapp" component={BannuApp} />
        <Route path="/ganiapp" component={GaniApp} />
      </div>
    </Router>
  );
}
function BannuApp() {
  return <Game/>;
}

function GaniApp() {
  return <GameStart/>;
}

export default App;
