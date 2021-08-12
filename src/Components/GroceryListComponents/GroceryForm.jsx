import React, { useState, useEffect, useRef } from 'react'

function GroceryForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null) 

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

    return (
        <form className='groceryForm' onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>    
            <input 
                type='text' 
                placeholder='Update you item' 
                value={input} 
                name='text' 
                className='groceryInput edit'
                onChange={handleChange} 
                ref={inputRef}
            />
            <button className='groceryButton edit'>Update</button>
            </>
            ) : (
            <>
            <input 
                type='text' 
                placeholder='Write something..' 
                value={input} 
                name='text' 
                className='groceryInput'
                onChange={handleChange} 
                ref={inputRef}
            />
            <button className='groceryButton'>Add</button>
            </>
            )}
        </form>
    )
}

export default GroceryForm
