import { useState } from 'react'
import Quote from './Quote'
import './App.css'

function App() {
  const [quote,setQuote]=useState();
  const [author,setAuthor]=useState();
  
  
const apiUrl="http://api.quotable.io/random";
let numbers;
async function getApi(url){
  const response = await fetch(url);
  var data=await response.json();
  console.log(data);
  setQuote(data.content);
  setAuthor(data.author);
  
}
const handleGetQuote=()=>{
  getApi(apiUrl)
}
  return (
    <>
     <h1 id="pageTitle">The Sages' Quotes</h1>
     <Quote quote={quote} handleGetQuote={handleGetQuote} author={author}/>
    </>
  )
}

export default App
