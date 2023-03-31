import React from 'react'

const Product = (product) => {
   const prod = product.product
   return (
      // key is needed for react to uniquely identify each component
      <div
         key={prod.id}
         className='bg-white shadow-md rounded-lg text-center min-h-[800px]'
      >
         {/* // image of the prod */}
         <img
            className='mx-auto mb-4 mt-1 h-[74%] w-full object-contain'
            src={prod.image}
            alt={prod.title}
         />
         {/* // prod details */}
         <div className='bg-gray-800 h-[24%] p-3'>
            <h2 className='text-lg font-bold text-white'>{prod.title}</h2>
            <p className='text-gray-300'>{prod.category}</p>
            <p className='text-gray-400 font-bold'>${prod.price}</p>
            <p className='text-gray-400 font-bold'>
               ✬ {prod.rating.count} | Count: {prod.rating.rate}
            </p>
         </div>
      </div>
   )
}

export default Product
