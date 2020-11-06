import React,{useContext} from 'react'
import {bookContext} from '../context/BookContext'
 
const Navbar = ()=>{

   const {books} = useContext(bookContext)

    return(
        <div className="navbar">
            <h1>Reading book list</h1>
            <p>Currently you have {books.length > 0 ? books.length : "no"}  books to read in pending</p>

        </div>
    )
}


export default Navbar