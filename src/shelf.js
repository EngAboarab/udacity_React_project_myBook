import { useEffect, useState } from "react";
import Book from "./bookCard";

const Shelf = ({shelf,books,handleSelect}) => {
 
const [loading,setLoading]=useState(false)
const [shelfBooks,setShelfBooks]=useState([])
  useEffect(()=>{

    const getShelfBooks=async(shelf)=>{
      const shelfBooks=await  books.filter(c=>c.shelf==shelf)
      setShelfBooks(shelfBooks)
    }



    getShelfBooks(shelf)
    

    setLoading(true)  
    
  },[books])

    return ( <>
    
    <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">{
                books.length>0?shelfBooks.length>0?shelfBooks.map((b,i)=><li key={b.id}><Book bookDetails={b} shelf={shelf} handleSelect={handleSelect}/></li>):<h2>empty shelf,add books here</h2>:<h2>Loading</h2>
              }
              
               
              </ol>
            </div>
          </div>
         
        </div>
    
    </> );
}
 
export default Shelf;