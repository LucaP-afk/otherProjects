import React from 'react' 
import '../App.css'

function Box(props) {
    return(
        <div className='projectBox'>
            <h2 className='projectTitle'>{props.Title}</h2>
            <img src={props.Logo} alt='Project Preview'></img>
            <p className='projectDescription'>{props.Description}</p>
        </div>
    )
}

export default Box