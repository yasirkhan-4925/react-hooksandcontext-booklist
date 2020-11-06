
import React from 'react'
import BookList from './component/BookList'
import Navbar from './component/Navbar'
import NewBookForm from './component/NewBookForm';
import BookContextProvider, { bookContext } from './context/BookContext';


function App() {
  return (
    <div className="App">
      <BookContextProvider>
      <Navbar/>
      <NewBookForm/>
      <BookList/>
      </BookContextProvider>
    </div>
  );
}

export default App;
