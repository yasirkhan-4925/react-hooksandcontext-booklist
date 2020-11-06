import React,{useContext} from 'react'
import BookDetails from './BookDetails'
import {bookContext} from '../context/BookContext'


const BookList = ()=>{

    const {books} = useContext(bookContext)
    return books.length ? ( 
        <div className="book-list">
            <ul>
               {books.map((book)=>{
                   return  <BookDetails key={book.id} book={book}/>
               })}
               
            </ul>
        </div>
    ) :
    (
      <div className="empty">Hurray No Books to Read :)</div>
    )
}

export default BookList