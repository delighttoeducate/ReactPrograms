import React, { Component } from "react";
import styles from "../index.module.css";
class Square extends Component {
  render() {
    return (
      <button className={styles.square} onClick={this.props.onClick}>
        {// this.props.value;
        this.props.value === "X" ? (
          <span className={styles.userOne}>{this.props.value}</span>
        ) : (
          <span className={styles.userTwo}>{this.props.value}</span>
        )}
      </button>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SquareValues: Array(9).fill(null),
      xIsNext: true
    };
  }
  handleSquareClick = eachSqaureValue => {
    // this.setState()
    const squares = this.state.SquareValues.slice();
    if (calculateWinner(squares) || squares[eachSqaureValue]) {
      return;
    }
    squares[eachSqaureValue] = this.state.xIsNext ? "X" : "O";
    this.setState({
      SquareValues: squares,
      xIsNext: !this.state.xIsNext
    });
  };

  renderSquare(eachSqaureValue) {
    return (
      <Square
        value={this.state.SquareValues[eachSqaureValue]}
        onClick={() => this.handleSquareClick(eachSqaureValue)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.SquareValues);
    let status;
    if (winner) {
      status = `Winner ${winner}`;
    } else {
      status = `Next Player ${this.state.xIsNext ? "X" : "O"}`;
    }
    return (
      <div>
        <div className="status">
          <strong>{status}</strong>
        </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class GameStart extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>

        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // console.log(`${a} - ${b} - ${c}`);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default GameStart;
