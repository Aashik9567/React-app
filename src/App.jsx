import DigitalClock from "./components/DigitalClock"
import Colorpicker from "./components/Colorpicker"
import Navbar from "./components/Navbar"
// import ProductList from "./components/ProductList"
import Todolist from "./components/Todolist"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ColorPage from "./components/ColorPage";

function App() {


  return (
    <>
    <Router>
    <div className="main-container">
     <Navbar/>
    {/* <Test nameOfButton={"helloButton"}/> */}
    
    </div>
    <Routes>
      <Route index element={<ColorPage/>}/>
      <Route path="/clock" element={<DigitalClock/>}/>
    </Routes>
     
     </Router>
    </>
  )
}

export default App
