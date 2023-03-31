import { useEffect, useState } from 'react'

const Dashboard = () => {
   const [products, setProducts] = useState([])

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
         } catch (error) {
            console.error(error)
         }
      }
      fetchProducts()
   }, [])

   return (
      <div className='container mx-auto py-8'>
         <h1 className='text-3xl font-bold mb-8'>Dashboard</h1>
         <div className='grid grid-cols-1 mx-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.map((product) => (
               <div
                  key={product.id}
                  className='bg-white shadow-md rounded-lg text-center'
               >
                  <img
                     className='mx-auto mb-4 mt-1 h-[74%] w-full object-contain'
                     src={product.image}
                     alt={product.title}
                  />
                  <div className='bg-gray-800 h-[24%] pt-3'>
                     <h2 className='text-lg font-bold text-white'>{product.title}</h2>
                     <p className='text-gray-300'>{product.category}</p>
                     <p className='text-gray-400 font-bold'>${product.price}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Dashboard
