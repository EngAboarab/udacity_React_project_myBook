import { Link } from "react-router-dom";
import Book from "./bookCard";
import { useEffect, useState } from "react";
import {PropTypes} from 'prop-types';
import * as apis from './BooksAPI'
const Search = ({handleSelect,shelves,books}) => {
  const [temp,setTemp]=useState("")
 const [updated,setUpdated]=useState(false)
  const [searchBooks,setSearchBooks]=useState([])
  
   //when search merg the search results and the books on the shelves books
   //when search handle search function will run and return the temp list
useEffect(()=>{

 if(temp?.length>0){
  const merg=temp?.map(search=>{
    const matchBook=books.find(book=>book.id==search.id)
    return matchBook?matchBook:{...search,shelf:"none"}
  })
  setSearchBooks(merg);
 }

}
 ,[temp])

 useEffect(()=>{console.log(updated);},[updated])  

console.log(updated);
const handleSearch=(e)=>{
 


  
   apis.search(e.target.value,20)
 
  .then(results=>setTemp(results||[]))



     
   }


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
                
                onChange={(e)=>{handleSearch(e)}}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {searchBooks.length>0?searchBooks.map((book,i)=><li key={book.id}><Book bookDetails={book} shelf={book.shelf}handleSelect={handleSelect} shelves={shelves}/></li>):<div></div>}
            </ol>
          </div>
        </div>
    </> );
}
Search.propTypes={query:PropTypes.string,handleSelect:PropTypes.func,books:PropTypes.array}
export default Search;
//.split(" ").join("")