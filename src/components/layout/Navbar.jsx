import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <nav className='bg-gray-800 p-4'>
         <div className='flex items-center justify-between mx-1'>
            <div className='flex items-center'>
               <p className='text-white font-bold text-xl'>
                  Dash Central
               </p>
            </div>
            <div className='flex items-center'>
               <Link to="/" className='text-white mx-4'>
                  Dashboard
               </Link>
               <Link to="/register" className='text-white'>
                  Register
               </Link>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
