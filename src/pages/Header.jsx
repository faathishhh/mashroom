import React from 'react'

const Header = () => {
  return (
    <div className='flex px-30 py-8 items-center justify-between font-semibold bg-gray-100'>

      <div>
        <img src="/logo.svg" alt="logo" className='w-30' />
      </div>

      <div>
        <nav>
          <ul className='flex gap-15'>
            <li  >
              <a href="#" class="text-gray-800 border-b-3 border-transparent hover:border-orange-600 pb-1 font-[650] text-[20px] transition-all">
                Home
              </a>
            </li>
            
            <li  >
              <a href="#" class="text-gray-800 border-b-3 border-transparent hover:border-orange-600 pb-1 font-[650] text-[20px] transition-all">
                Blog
              </a>
            </li>
            
            <li  >
              <a href="#" class="text-gray-800 border-b-3 border-transparent hover:border-orange-600 pb-1 font-[650] text-[20px] transition-all">
                Products
              </a>
            </li>
            
            <li  >
              <a href="#" class="text-gray-800 border-b-3 border-transparent hover:border-orange-600 pb-1 font-[650] text-[20px] transition-all">
                Reviews
              </a>
            </li>
            
          </ul>
        </nav>
      </div>

      <div className='flex gap-10
      '>
        <button className='text-gray-800 hover:text-orange-600 font-[650] text-[20px]'>Log in</button>
        <button className='bg-orange-600 text-amber-50 px-8 py-4 rounded-sm hover:bg-orange-700 text-sm  font-[600] text-[20px]'>Sign up</button>
      </div>

    </div>
  )
}

export default Header