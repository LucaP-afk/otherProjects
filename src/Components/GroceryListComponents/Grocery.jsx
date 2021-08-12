import React, { useState } from 'react'
import GroceryForm from './GroceryForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Grocery({elements, completeElement, removeElement, updateElement }) {

    const [edit,setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateElement(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <GroceryForm edit={edit} onSubmit={submitUpdate} />
    }

    return elements.map((element, index) => (
        <div className={element.isComplete ? 'elementRow complete' : 'elementRow'} key={index}>
            <div key={element.id} onClick={() => completeElement(element.id)}>
                {element.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeElement(element.id)}
                className='deleteIcon'
                />
                <TiEdit
                onClick={() => setEdit({id: element.id, value: element.text})}
                className='editIcon'
                />
            </div>
        </div>
    ))
}

export default Grocery
