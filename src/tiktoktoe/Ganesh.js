import React, { Component } from 'react'
import '../App.css'
class Square extends Component {
    render() {
        return (
        <button className="sqaure">{this.props.value}</button>
        )
}
}


class Board extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             SquareValues: Array(9).fill(null)
        }
    }
handleSquareClick=()=>{

}

renderSquare(sqaureValue)
{
    return <Square value={this.state.SquareValues[sqaureValue]} onClick={()=>this.handleSquareClick} />
}

render()
{
    return(<div>
        <div>
        {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div>
        {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div>
        {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
    </div>)
}

}


class GameStart extends Component{
render(){
    return(<div>
        <div>
        <Board/>
        </div>

        <div>
            <p>Game Info</p>
        </div>
    </div>)
}
}

export default GameStart
