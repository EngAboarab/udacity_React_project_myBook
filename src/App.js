import "./App.css";
import { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
import Search from "./searchPage";
import Shelves from "./shelves";
import * as apis from "./BooksAPI"
function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);
  const [booksList,setBooksList]=useState([]);
 
  // const [shelves,setShelves]=useState(["currentlyReading","wantToRead","read"])
  const [shelves,setShelves]=useState([
    
    {id:"1",shelfName:"currentlyReading",shelfDisplayName:"Currently Reading"},
    {id:"2",shelfName:"wantToRead",shelfDisplayName:"Want To Read"},
    {id:"3",shelfName:"read",shelfDisplayName:" Read"},
    
  
  ])
  

  
  useEffect(()=>{
  

      const getData=async()=>{
        const data=await apis.getAll()
        setBooksList(data)
        
       
      }
      getData();


 
  },[])

  const handleSelect=(bookDetails,selectedShelf)=>{

console.log(selectedShelf);
     
    if(selectedShelf===""||selectedShelf==="none"){
      selectedShelf="none";
      const updateList=booksList.filter(b=>b.id!==bookDetails.id)
      setBooksList(updateList)
      apis.update(bookDetails,selectedShelf)
     }
     
     if (!booksList.includes(bookDetails)){
        bookDetails.shelf=selectedShelf
        const updatedList=[...booksList,bookDetails]
         
        setBooksList(updatedList)
        apis.update(bookDetails,selectedShelf)
       
      }else{
      const updatedList= booksList.map((b)=>
      b.id===bookDetails.id?{...b,shelf:selectedShelf}:b)
      setBooksList(updatedList)
      apis.update(bookDetails,selectedShelf)
     }

  }


  return (
    <>
   <Routes>
 
      <Route path="/" element={<Shelves shelves={shelves} books={booksList}  handleSelect={handleSelect}/>} />
      <Route path="/search" element={<Search handleSelect={handleSelect} shelves={shelves} books={booksList} />} />

    </Routes>
    </>
  );
}

export default App;
