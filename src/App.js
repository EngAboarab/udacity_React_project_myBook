import "./App.css";
import { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
import Search from "./searchPage";
import Shelves from "./shelves";
import * as apis from "./BooksAPI"
function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);
  const [booksList,setBooksList]=useState([]);
  const [searchBooks,setSearchBooks]=useState([]);
  const [shelves,setShelves]=useState(["currentlyReading","wantToRead","read"])

  useEffect(()=>{
    const getData=async()=>{
      const data=await apis.getAll()
      setBooksList(data)
      
     
    }
    getData();
  
 setSearchBooks([])
 
  },[])


  const handleSearch=(bookName)=>{
  const splitBookName=bookName.split(' ').join('')
  
    setSearchBooks(bookName.length>0?booksList.filter(b=>b.title.toLowerCase().split(' ').join('').includes(splitBookName.toLowerCase())):[])
  }




  const handleSelect=(bookDetails,selectedShelf)=>{
    const updatedList= booksList.map((b)=>
      b.title==bookDetails.title?{...b,shelf:selectedShelf}:b
    )
    setBooksList(updatedList)
    apis.update(bookDetails,selectedShelf)
    
  }

  return (
    <>
   <Routes>
  {console.log(booksList)}
      <Route path="/" element={<Shelves shelves={shelves} books={booksList}  handleSelect={handleSelect}/>} />
      <Route path="/search" element={<Search onSearch={handleSearch} searchBooks={searchBooks} handleSelect={handleSelect}/>} />

    </Routes>
    </>
  );
}

export default App;
