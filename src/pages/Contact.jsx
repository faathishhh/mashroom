import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='flex bg-black text-gray-300 p-3 gap-20  items-center justify-center '>
            <div className='flex gap-3 items-center justify-center' >
                <img src="/envelop.svg" alt="envelop" className='w-4.5 cursor-pointer hover:text-white' />
                <h6 className='text-[16px] font-bold cursor-pointer hover:text-white'>hello@shopping.com</h6>
            </div>
            <div className='flex gap-3 items-center justify-center'>
              <img src="/phone.svg" alt="phone" className='w-3 cursor-pointer hover:text-white' />
              <h6 className='text-[16px] font-bold cursor-pointer hover:text-white'>+ 0927 6277 28525</h6>
            </div>
        </div>
    </div>
  )
}

export default Contact