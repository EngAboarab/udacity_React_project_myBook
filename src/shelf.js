import { useEffect, useMemo, useState } from "react";
import Book from "./bookCard";
import{PropTypes} from 'prop-types'
import debounce from "lodash.debounce"
const Shelf = ({shelves,books,shelf,handleSelect}) => {
 

const [shelfBooks,setShelfBooks]=useState([])



  useEffect(()=>{
 
    const getShelfBooks=(shelf)=>{
      const shelfBooks=  books.filter(c=>c.shelf===shelf.shelfName)
      setShelfBooks(shelfBooks)
    }



    getShelfBooks(shelf)
    

    
  },[books,shelf])

    return ( <>
    
    <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.shelfDisplayName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">{
                books.length>0?shelfBooks.length>0?shelfBooks.map((b,i)=><li key={b.id}><Book bookDetails={b}  handleSelect={handleSelect} shelves={shelves}/></li>):<h2>empty shelf,add books here</h2>:<h2>Loading</h2>
              }
              
               
              </ol>
            </div>
          </div>
         
        </div>
    
    </> );
}
 Shelf.propTypes={shelves:PropTypes.array,books:PropTypes.array,shelf:PropTypes.object,handleSelect:PropTypes.func}
export default Shelf;