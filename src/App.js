import React from 'react';
import './App.css';
import Board from './bannuComponents/Board'
import Square from './bannuComponents/Square'
import Game from './bannuComponents/Game'
import GameStart from './tiktoktoe/GameStart';


function App() {
  return (
    <div>
    
     <Game/>
<br/>
     <hr/>
<br/>
     <GameStart/>
    
    </div>
  );
}

export default App;
