import React, { useState } from 'react'
import './TicTacToe.css'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function TicTacToe() {

    const Square = (props) => {
        return (
            <button className='squareTicTacToe' onClick={props.onClick}>
                {props.value}
            </button>
        )
    }

    const Board = () => {
        const [boardSquares, setBoardSquares] = useState([Array(9).fill(null)]);
        const [xIsNext, setXIsNext] = useState(true);
        const handleClick = index => {
            const squares = [...boardSquares];
            if(calculateWinner(boardSquares) || squares[index]) return;
            squares[index] = xIsNext ? 'X' : 'O';
            setBoardSquares(squares);
            setXIsNext(!xIsNext);
        }
        
        const renderSquare = index => {
            return (
                <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
            )
        }


        let status;
        const winner = calculateWinner(boardSquares);

        status = winner 
        ? <div className='winColorTicTacToe'>{winner} wins!</div>
        : `Next player: ${xIsNext ? 'X' : 'O'}`

        return (
            <div>
                <div className='statusTicTacToe'>{status}</div>
                <div>
                    {renderSquare(1)}
                    {renderSquare(2)}
                    {renderSquare(3)}
                </div>
                <div>
                    {renderSquare(4)}
                    {renderSquare(5)}
                    {renderSquare(6)}
                </div>
                <div>
                    {renderSquare(7)}
                    {renderSquare(8)}
                    {renderSquare(9)}
                </div>
            </div>
        )
    }

    const calculateWinner = (squares) => {
        const winningLines = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4 ,7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7] 
        ];
        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return(
        <div>
            <div className='titleContainerTicTacToe'>
                <button><Link to='/'><FaRegArrowAltCircleLeft className='backButton' /></Link></button>
                <h1 className='titleTicTacToe'>Tic Tac Toe</h1>
            </div>
            <div className='gameTicTacToe'>
                <Board />
            </div>
        </div>
    )
}

export default TicTacToe