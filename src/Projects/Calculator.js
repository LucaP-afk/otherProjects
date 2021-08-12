import React, { useState } from 'react'
import './Calculator.css'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Calculator() {
    const [result, setResult] = useState('')

    const handleClick = (e) => {
        if(result === 'Error') {
            clear()
        } else {
            setResult(result.concat(e.target.name))
        }
    }

    const clear = () => {
        setResult('')
    }

    const backspace = () => {
        if(result === 'Error') {
            clear()
        } else {
            setResult(result.slice(0, result.length -1))
        }
    }

    const calculate = () => {
        if(result === 'Error' || result === '') {
            clear()
        } else {
            try {
                // eslint-disable-next-line
                setResult(eval(result).toString())
            } catch(err) {
                setResult('Error')
                }
        }
    }

    return(
        <div>
            <div className='titleContainerCalculator'>
                <button><Link to='/'><FaRegArrowAltCircleLeft className='backButton' /></Link></button>
                <h1 className='titleCalculator'>Calculator</h1>
            </div>
            <div className='containerCalculator'>
                <form>
                    <input type='text' value={result} />
                </form>
                <div className='keyPadCalculator'>
                    <button onClick={clear} id='clear'>Clear</button>
                    <button onClick={backspace} id='backspace'>C</button>
                    <button name='/' onClick={handleClick}>&divide;</button>
                    <button name='7' onClick={handleClick}>7</button>
                    <button name='8' onClick={handleClick}>8</button>
                    <button name='9' onClick={handleClick}>9</button>
                    <button name='*' onClick={handleClick}>&times;</button>
                    <button name='4' onClick={handleClick}>4</button>
                    <button name='5' onClick={handleClick}>5</button>
                    <button name='6' onClick={handleClick}>6</button>
                    <button name='-' onClick={handleClick}>&ndash;</button>
                    <button name='1' onClick={handleClick}>1</button>
                    <button name='2' onClick={handleClick}>2</button>
                    <button name='3' onClick={handleClick}>3</button>
                    <button name='+' onClick={handleClick}>+</button>
                    <button name='.' onClick={handleClick}>.</button>
                    <button name='0' onClick={handleClick}>0</button>
                    <button onClick={calculate} id='result'>=</button>
                </div>
            </div>
            
        </div>
    )
}

export default Calculator