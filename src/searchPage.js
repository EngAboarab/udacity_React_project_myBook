import { Link } from "react-router-dom";
import Book from "./bookCard";
import { useEffect, useState } from "react";
import {PropTypes} from 'prop-types';
import * as apis from './BooksAPI'
const Search = ({handleSelect,shelves,books}) => {
  const [temp,setTemp]=useState("")
 
  const [searchBooks,setSearchBooks]=useState([])
  const [query,setQery]=useState("")

 //memorize the debounce return to keep it between re-renders

// const debounceResults=useMemo(()=>{
//   return debounce(handleQuery,500)
// },[])

   //when search merg the search results and the books on the shelves books
   //when search handle search function will run and return the temp list
useEffect(()=>{
  
 if(temp){
  if(temp.error){setSearchBooks([])
  }else{
    const merg=temp?.map(search=>{
      const matchBook=books.find(book=>book.id===search.id)
      return matchBook?matchBook:{...search,shelf:"none"}
    })
    setSearchBooks(merg);
   }
  }else{
    setSearchBooks([])
   }
  }
  


 ,[temp,books])




useEffect(()=>{
  const handleSearch=(query)=>{
 


  
  apis.search(query,4)

 .then(results=>
 results?setTemp(results):setSearchBooks([])


 )
  

  }


    
  
handleSearch(query)
},[query])

const handleQuery=(query)=>{
setQery(query)
}

    return ( <>
{console.log(searchBooks)}
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
                value={query}
                onChange={(e)=>{handleQuery(e.target.value)}}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {query.length>0?searchBooks.length>0?searchBooks.map((book,i)=><li key={book.id}><Book bookDetails={book} shelf={book.shelf}handleSelect={handleSelect} shelves={shelves}/></li>):<div>No Such Book</div>:<div></div>}
            </ol>
          </div>
        </div>
    </> );
}
Search.propTypes={query:PropTypes.string,handleSelect:PropTypes.func,books:PropTypes.array}
export default Search;
//.split(" ").join("")