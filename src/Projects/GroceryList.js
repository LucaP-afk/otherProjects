import React, { useEffect } from 'react'
import './GroceryList.css'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import List from '../Components/GroceryListComponents/List'

function GroceryList() {

    useEffect(() => {
        window.scrollTo(0,0);
     }, [])

    return(
        <>
            <div className='groceryListTitleContainer'>
                <button><Link to='/'><FaRegArrowAltCircleLeft className='backButton' /></Link></button>
                <h1 className='groceryListTitle'>Grocery List</h1>
            </div>
            <div className='groceryApp'>
                <List />
            </div>
        </>
    )
}

export default GroceryList