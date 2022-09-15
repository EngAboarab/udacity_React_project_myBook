import {useEffect, useState} from "react";
import {PropTypes} from 'prop-types'
const Book = ({bookDetails,shelves,handleSelect}) => {

  const [updatedBook,setUpdatedBook]=useState(bookDetails)

  useEffect(()=>{
setUpdatedBook(bookDetails)
  },[bookDetails])
  
  const handleChange=(e)=>{
  
   const  selectedShelf=e.target.value

   handleSelect(updatedBook,selectedShelf)
  }

    return ( <>
    
      <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage:
                            `url(${updatedBook?.imageLinks?.thumbnail})`,
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select value={updatedBook.shelf} onChange={(e)=>handleChange(e)} >
                         
                        {updatedBook.shelf=="none"?<option value="none" disabled>
                        Add to...
                          </option>:
                        <option value="none" disabled>
                        Move to...
                          </option>
                        }
                          {shelves.map(shelfDetail=>
                            <option key={shelfDetail.id} value={shelfDetail.shelfName}>{shelfDetail.shelfDisplayName}</option>
                          )}
                          {updatedBook.shelf!=="none"&&<option value="">None</option>}
                          
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{updatedBook.title}</div>
                    <div className="book-authors">{updatedBook.authors?.join(",")}</div>
                  
                  </div>
    
    </> );
}
 Book.propTypes={
  bookDetails:PropTypes.object.isRequired,
  handleSelect:PropTypes.func.isRequired,
  shelves:PropTypes.array.isRequired
 }
export default Book;