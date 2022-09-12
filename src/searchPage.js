import { Link } from "react-router-dom";
import Book from "./bookCard";
import { useEffect, useState } from "react";
const Search = ({onSearch,searchBooks,handleSelect}) => {
  const [query,setQuery]=useState("")
    const handleChange=(e)=>{
      setQuery(e.target.value)
      
    }
    useEffect(()=>{
   onSearch(query)
    },[query])
    return ( <>
     <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
              
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                
                onChange={(e)=>{handleChange(e)}}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {searchBooks.length>0?searchBooks.map((book,i)=><li key={book.id}><Book bookDetails={book} handleSelect={handleSelect}/></li>):<div></div>}
            </ol>
          </div>
        </div>
    </> );
}
 
export default Search;