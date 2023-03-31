import { useEffect, useState } from 'react'

const Dashboard = () => {
   const [products, setProducts] = useState([])
   const [loading, setloading] = useState(false)

   useEffect(() => {
      // Fetch products from the fake store API
      const fetchProducts = async () => {
         // Set loading to true
         setloading(true)
         // Try to get the data from the API
         try {
            // Get the response from the API
            const response = await fetch('https://fakestoreapi.com/products')
            // Get the data from the response
            const data = await response.json()
            // Set the data to the products state
            setProducts(data)
            // Set loading to false
            setloading(false)
         } catch (error) {
            // If there is an error, log the error
            console.error(error)
         }
      }
      fetchProducts()
   }, [])

   // If loading is true, show the loading message
   if (loading) {
      return (
         <div className='min-h-screen'>
            <h1 className='text-6xl font-bold pt-16 text-center'>Loading...</h1>
         </div>
      )
   }

   // If loading is false, show the products
   return (
      <div className='container mx-auto py-8'>
         <h1 className='text-6xl font-bold mb-8 text-center'>Dashboard</h1>
         <div className='grid grid-cols-1 mx-2 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* // map through the products array */}
            {products.map((product) => (
               // key is needed for react to uniquely identify each component
               <div
                  key={product.id}
                  className='bg-white shadow-md rounded-lg text-center min-h-[800px]'
               >
                  {/* // image of the product */}
                  <img
                     className='mx-auto mb-4 mt-1 h-[74%] w-full object-contain'
                     src={product.image}
                     alt={product.title}
                  />
                  {/* // product details */}
                  <div className='bg-gray-800 h-[24%] p-3'>
                     <h2 className='text-lg font-bold text-white'>
                        {product.title}
                     </h2>
                     <p className='text-gray-300'>{product.category}</p>
                     <p className='text-gray-400 font-bold'>${product.price}</p>
                     <p className='text-gray-400 font-bold'>
                        ✬ {product.rating.count} | Count: {product.rating.rate}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Dashboard
