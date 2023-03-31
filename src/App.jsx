import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <Routes>
               {/* <Route path='/' element={<Explore />} />
               <Route path='/offers' element={<Offers />} /> */}
            </Routes>
         </Router>
      </>
   )
}

export default App
