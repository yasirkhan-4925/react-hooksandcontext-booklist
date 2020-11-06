import React, { useState ,useContext } from 'react'
import {bookContext} from '../context/BookContext'

const NewBookForm = ()=>{
    
   const {dispatch} = useContext(bookContext) 
   const [bookTitle,setBookTitle] = useState("")
   const [bookAuthor,setBookAuthor] = useState("")


 const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({type:"ADD_BOOK" , book:{title:bookTitle,author:bookAuthor}})
    setBookTitle("")
    setBookAuthor("")
    console.log(bookTitle,bookAuthor)
 }

    return(
        <form onSubmit={onSubmitHandler}>
            <input required value={bookTitle} onChange={(e)=>setBookTitle(e.target.value)}  type="text" placeholder="book title"/>
            <input required  value={bookAuthor} onChange={(e)=>setBookAuthor(e.target.value)} type="text" placeholder="author name"/>
            <input type="submit" value="add book"/>
        </form>
    )
}

export default NewBookForm



