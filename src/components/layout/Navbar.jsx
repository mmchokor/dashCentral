import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <nav class='bg-gray-800 p-4'>
         <div class='flex items-center justify-between mx-1'>
            <div class='flex items-center'>
               <p class='text-white font-bold text-xl'>
                  Dash Central
               </p>
            </div>
            <div class='flex items-center'>
               <Link to="/" class='text-white mx-4'>
                  Dashboard
               </Link>
               <Link to="/register" class='text-white'>
                  Register
               </Link>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
