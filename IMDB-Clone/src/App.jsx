import "./App.css";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Movies/>}/>
      <Route path="/watchlist" element={<WatchList/>}/>


    </Routes>
    </BrowserRouter>
    


    </>
  );
}

export default App;