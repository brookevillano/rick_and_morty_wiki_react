import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/fonts/fonts.css"; // Ensure this path is correct
import "./App.css"; 
import Filters from "./components/Filters/Filters";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center customHeader my-2">
          Rick & Morty <span className="text-primary">WiKi</span>
        </h1>
      </header>
      <div className="container ubuntu">
        <div className="row">
          <div className="col-3 body">
            <Filters /> 
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
