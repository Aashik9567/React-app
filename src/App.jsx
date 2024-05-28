import DigitalClock from "./components/DigitalClock"

import Navbar from "./components/Navbar"
// import ProductList from "./components/ProductList"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ColorPage from "./components/ColorPage";
import StopWatch from "./components/StopWatch";
import TailwindCard from "./components/TailwindCard";
import Dictionary from "./Dictionary/Dictionary";

function App() {


  return (
    <>
    <Router>
    <div className="main-container ">
     <Navbar/>
    {/* <Test nameOfButton={"helloButton"}/> */}
    
    </div>
    <Routes>
      <Route index element={<ColorPage/>}/>
      <Route path="/clock" element={<DigitalClock/>}/>
      <Route path="/stopwatch" element={<StopWatch/>}/>
      <Route path="/card" element={<TailwindCard/>}/>
      <Route path="/dict" element={<Dictionary/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App
