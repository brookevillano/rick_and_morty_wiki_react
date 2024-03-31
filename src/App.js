import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/fonts/fonts.css"; // Ensure this path is correct
import "./App.css"; 
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";


function App() {
  let [pageNumber, updatePageNumber] = useState(1); // let[var, function] = useState(default val).. sets default page number to 1
  let [fetchedData, updateFetchedData] = useState([]); 
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`; // api link stored in api var, use template literal to use variables
  let {info, results} = fetchedData;  // destructors fetchedData into info and results
  useEffect(()=>{ // 
    // IIFE function (immediately invoked function)
      (async function(){ // loads up data according to api
        let data = await fetch(api).then((res)=>res.json()); // fetches data from our api, then convert raw data to json format
        updateFetchedData(data);
      })(); 
  }, [api]);  // the [api] basically says to watch the api for changes, if there is a change we will run this func again
  return (
    <div className="App body">
      <header className="App-header">
        <h1 className="text-center customHeader my-2">
          Rick & Morty <span className="text-primary">WiKi</span>
        </h1>
      </header>
      <div className="container ubuntu">
        <div className="row">
          <div className="col-3">
            <Filters /> 
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results}/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
