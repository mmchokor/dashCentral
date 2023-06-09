import { useState } from 'react'

const Register = () => {
   const [formData, setFormData] = useState({
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
   })
   const [errors, setErrors] = useState({})
   const [formSubmitted, setFormSubmitted] = useState(false)

   const formValidation = () => {
      // 1. Create errors object and set it to an empty object
      let errors = {}

      // 2. Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email) {
         // 3. Set error message
         errors.email = 'Email is required'
      } else if (!emailRegex.test(formData.email)) {
         // 4. Set error message
         errors.email = 'Invalid email address'
      }

      // 5. Validate name
      if (!formData.name) {
         // 6. Set error message
         errors.name = 'Name is required'
      }

      // 7. Validate password
      const passwordRegex =
         /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/
      if (!formData.password) {
         // 8. Set error message
         errors.password = 'Password is required'
      } else if (!passwordRegex.test(formData.password)) {
         // 9. Set error message
         errors.password =
            'Password must contain at least 7 characters with 1 capital letter, one number, and one special character'
      }

      // 10. Validate confirm password
      if (!formData.confirmPassword) {
         // 11. Set error message
         errors.confirmPassword = 'Confirm Password is required'
      } else if (formData.password !== formData.confirmPassword) {
         // 12. Set error message
         errors.confirmPassword = "Passwords don't match"
      }

      // 13. Set errors state
      setErrors(errors)
      // 14. Return true if there are no errors, otherwise return false
      return Object.keys(errors).length === 0
   }

   const handleSubmit = (event) => {
      // Prevent the default behavior of the form
      event.preventDefault()

      // Validate the form
      const isValid = formValidation()

      // Check if the form is valid
      if (isValid) {
         // Add the form data to the console if it's valid
         console.log('Form data:', formData)

         // Update the state to indicate that the form was submitted
         setFormSubmitted(true)
      }
   }

   const handleChange = (event) => {
      const { name, value } = event.target
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   return (
      <div className='min-h-screen flex items-center justify-center'>
         <div className='max-w-md w-full space-y-8'>
            <div>
               <h2 className='text-center text-3xl font-extrabold text-gray-900'>
                  Register an account
               </h2>
            </div>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
               <div className='rounded-md shadow-sm -space-y-px'>
                  <div>
                     <label htmlFor='email-address' className='sr-only'>
                        Email address
                     </label>
                     <input
                        id='email-address'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                           errors.email ? 'border-red-500' : 'border-gray-300'
                        } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                        placeholder='Email address'
                     />
                     {errors.email && (
                        <p className='mt-2 text-sm text-red-600'>
                           {errors.email}
                        </p>
                     )}
                  </div>
                  <div>
                     <label htmlFor='name' className='sr-only'>
                        Name
                     </label>
                     <input
                        id='name'
                        name='name'
                        type='text'
                        autoComplete='name'
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                           errors.name ? 'border-red-500' : 'border-gray-300'
                        } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                        placeholder='Name'
                     />
                     {errors.name && (
                        <p className='mt-2 text-sm text-red-600'>
                           {errors.name}
                        </p>
                     )}
                  </div>
                  <div>
                     <label htmlFor='password' className='sr-only'>
                        Password
                     </label>
                     <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                           errors.password
                              ? 'border-red-500'
                              : 'border-gray-300'
                        } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                        placeholder='Password'
                     />
                     {errors.password && (
                        <p className='mt-2 text-sm text-red-600'>
                           {errors.password}
                        </p>
                     )}
                  </div>
                  <div>
                     <label htmlFor='confirmPassword' className='sr-only'>
                        Confirm Password
                     </label>
                     <input
                        id='confirmPassword'
                        name='confirmPassword'
                        type='password'
                        autoComplete='current-password'
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                           errors.confirmPassword
                              ? 'border-red-500'
                              : 'border-gray-300'
                        } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                        placeholder='Confirm Password'
                     />
                     {errors.confirmPassword && (
                        <p className='mt-2 text-sm text-red-600'>
                           {errors.confirmPassword}
                        </p>
                     )}
                  </div>
               </div>

               <div>
                  <button
                     type='submit'
                     className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                     {formSubmitted ? 'Submitted' : 'Create account'}
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Register
