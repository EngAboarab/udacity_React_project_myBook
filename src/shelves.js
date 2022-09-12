import { Link } from "react-router-dom";
import Shelf from "./shelf"

const Shelves = ({shelves,books,handleSelect}) => {
   
    return ( 
    <>
     <div className="app">
    
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">

{shelves.map((shelf,i)=>(<div key={shelf}><Shelf shelf={shelf}   books={books} handleSelect={handleSelect}/></div>))})
       
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  
</div>
</div>
    </> );
}
 
export default Shelves;