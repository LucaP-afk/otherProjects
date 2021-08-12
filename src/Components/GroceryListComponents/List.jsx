import React, { useState } from 'react'
import GroceryForm from './GroceryForm'
import Grocery from './Grocery'

function List() {

    const [elements, setElements] = useState([])

    const addElement = element => {
        if(!element.text || /^\s*$/.test(element.text)) {
            return
        }

        const newElements = [element, ...elements]
        
        setElements(newElements)
    }

    const updateElement = (elementId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setElements(prev => prev.map(item => (item.id === elementId ? newValue : item)))
    }

    const removeElement = id => {
        const removeArr = [...elements].filter(element => element.id !== id)

        setElements(removeArr)
    }
    

    const completeElement = id => {
        let updatedElements = elements.map(element => {
            if (element.id === id) {
                element.isComplete = !element.isComplete
            }
            return element
        })
        setElements(updatedElements)
    }

    return (
        <div>
            <h1>Add items to your shopping list</h1>
            <GroceryForm onSubmit={addElement} />
            <Grocery elements={elements} completeElement={completeElement} removeElement={removeElement} updateElement={updateElement}/>
        </div>
    )
}

export default List
