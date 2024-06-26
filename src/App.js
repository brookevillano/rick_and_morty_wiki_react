import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/fonts/fonts.css"; // Ensure this path is correct
import "./App.css";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";
import CardDetails from "./components/Cards/CardDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1); // let[var, function] = useState(default val).. sets default page number to 1
  let [searchName, updateSearchName] = useState("");
  let [searchSpecies, updateSearchSpecies] = useState("");
  let [searchStatus, updateStatus] = useState("");
  let [searchType, updateSearchType] = useState("");
  let [searchGender, updateSearchGender] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchName}&species=${searchSpecies}&type=${searchType}&status=${searchStatus}&gender=${searchGender}`; // api link stored in api var, use template literal to use variables
  let { info, results } = fetchedData; // destructors fetchedData into info and results

  useEffect(() => {
    // IIFE function (immediately invoked function)
    (async function () {
      // loads up data according to api
      let data = await fetch(api).then((res) => res.json()); // fetches data from our api, then convert raw data to json format
      updateFetchedData(data);
    })();
  }, [api]); // the [api] basically says to watch the api for changes, if there is a change we will run this func again
  return (
    <div className="App body">
      {/* <Name updatePageNumber={updatePageNumber} updateSearch={updateSearch}/> */}

      <div className="container ubuntu mb-5">
        <Filters
          updatePageNumber={updatePageNumber}
          updateSearchName={updateSearchName}
          updateSearchSpecies={updateSearchSpecies}
          updateSearchType={updateSearchType}
          updateStatus={updateStatus}
          updateSearchGender={updateSearchGender}
        />{" "}
        {/* This places Filters right under the Search bar, centered */}
      </div>

      <div className="container ubuntu">
        <div className="row g-4 justify-content-center">
          <Cards page="/" results={results} />
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
