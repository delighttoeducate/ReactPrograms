import React, { Component } from 'react'
import Board from './Board'
class Game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            history:[{
             squares:Array(9).fill(null),}],
             xValue:true
        }
    }
    
    
    render() {
        
        const history=this.state.history
        const current=history[history.length-1]
        const winner = calculateWinner(current.squares)
        let status
        if(winner){ status ='Winner :'+ winner;}
        else {
            status='Next player :'+ (this.props.xValue ? 'X':'O')
        }
        return (
            <div>
                <div className="status">{status}</div>
                <Board/>
            </div>
        )
    }
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


export default Game
