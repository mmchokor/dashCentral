import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <main className='w-100% h-max bg-slate-400'>
               <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/register' element={<Register />} />
               </Routes>
            </main>
         </Router>
      </>
   )
}

export default App
