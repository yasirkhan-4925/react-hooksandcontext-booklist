

import React,{createContext, useReducer , useEffect} from 'react'
import {bookReducer} from '../Reducers/bookReducer'
export const bookContext = createContext();


const BookContextProvider = (props) => {
   
    const [books , dispatch] = useReducer(bookReducer, [],()=>{
      const localData = localStorage.getItem('books')
      return localData ? JSON.parse(localData) : []
    })
    
    useEffect(()=>{
      localStorage.setItem("books",JSON.stringify(books))
    },[books])
   
  return (
      <bookContext.Provider value={{books,dispatch}}>
       {props.children}

      </bookContext.Provider>
  )


}


export default BookContextProvider