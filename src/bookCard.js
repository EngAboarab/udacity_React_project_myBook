const Book = ({bookDetails,shelf,handleSelect}) => {

  const handleChange=(e)=>{
   const  selectedShelf=e.target.value
   handleSelect(bookDetails,selectedShelf)
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
                            `url(${bookDetails.imageLinks.thumbnail})`,
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select value={bookDetails.shelf} onChange={(e)=>handleChange(e)}>
                          <option value="none" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead" >Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{bookDetails.title}</div>
                    <div className="book-authors">{bookDetails.authors[0]}</div>
                  </div>
    
    </> );
}
 
export default Book;