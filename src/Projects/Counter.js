import React, { Component } from 'react'
import './Counter.css'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import randomColor from 'randomcolor'


class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            color: 'white',
            randomColor: true,
            randomText: 'Unable'
        }
    }

    increment = () => {
        this.setState({ 
            count: this.state.count + 1, 
            color: this.state.randomColor ? randomColor() : 'white'
        })
    }
    decrement = () => {
        this.setState({ 
            count: this.state.count - 1, 
            color: this.state.randomColor ? randomColor() : 'white' 
        })
    }
    reset = () => {
        this.setState({ 
            count: 0,
            color: 'white' 
        })
    }

    enable = () => {
        this.setState ({
            color: this.state.color === 'white' && this.state.count !== 0 ? randomColor() : 'white',
            randomColor: !this.state.randomColor,
            randomText: this.state.randomText === 'Unable' ? 'Able' : 'Unable'
        })
    }

    render () {
    return (
        <div className='containerCounter'>
            <div className='titleContainerCounter'>
                <button><Link to='/'><FaRegArrowAltCircleLeft className='backButton' /></Link></button>
                <h1 className='titleCounter'>Counter</h1>
            </div>
            <div className='buttonCounter'>
                <button onClick={this.decrement} className='counterMinusClick'>-</button>
                <button onClick={this.increment} className='counterPlusClick'>+</button>
            </div>
            <div className='resultBoxCounter'>
                <h2 className='resultCounter' style={{color: this.state.color}}>{this.state.count}</h2>
                <button onClick={this.enable}className='unableButtonCounter'>
                    {this.state.randomText}<br/>
                    <span style={{color: 'red'}}>r</span>
                    <span style={{color: 'rgb(255, 115, 0)'}}>a</span>
                    <span style={{color: 'rgb(255, 166, 0)'}}>n</span>
                    <span style={{color: 'yellow'}}>d</span>
                    <span style={{color: 'rgb(200, 255, 0)'}}>o</span>
                    <span style={{color: 'rgb(72, 255, 0)'}}>m</span>
                    <span style={{color: 'rgb(0, 255, 200)'}}>C</span>
                    <span style={{color: 'rgb(0, 153, 255)'}}>o</span>
                    <span style={{color: 'rgb(132, 0, 255)'}}>l</span>
                    <span style={{color: 'rgb(212, 0, 255)'}}>o</span>
                    <span style={{color: 'rgb(255, 0, 179)'}}>r</span>
                </button>
            </div>
            <div className='resetBoxCounter'>
                <button onClick={this.reset} className='resetButtonCounter'>Reset</button>
            </div>
        </div>
    )
    }
}

export default Counter