import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className='flex justify-between  items-center px-15 py-10 bg-gray-100'>
                <div className='flex justify-between  items-center px-15 py-20 gap-10 text-gray-900 bg-amber-50'>
                    <div className='flex flex-col gap-10 ' >
                        <div className='flex flex-col gap-2'>
                            <p className='text-[20px] font-[498] '>100% Natural Products</p>
                            <h1 className='text-7xl font-[800]'>MUSHROOM</h1>
                            <p className='text-[20px] w-[600px] font-[498]'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>

                        </div>
                        <div className='flex gap-5'>
                            <button className='bg-orange-600 font-[498] text-amber-50 px-8 py-3 rounded-sm hover:bg-orange-700 font-[600] text-[20px]'>Buy Now</button>
                            <button className='bg-white font-[498] text-black border-1 px-8 py-3 rounded-sm hover:bg-black hover:text-white font-[600] text-[20px] '>Contact Us</button>
                        </div>
                    </div>

                    <div>
                        <img src="/hero-mashroom.png" alt="mushroom" className='w-[600px]' />
                    </div>

                </div>



            </section>

            <section className=' px-30 py-5 bg-gray-100' >
                <img src="/hero1.svg" alt="" />
            </section>

            <section className=' px-30 py-20  flex flex-col gap-20 bg-gray-100 '>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <p className='text-orange-600 tracking-[8px] text-[17px] font-[500] '> SERVICE</p>
                    <h4 className='text-gray-900 text-[45px] font-[600]'>We offer for you</h4>
                </div>
                <div className='flex items-center justify-center gap-10 '>

                    <div className=' border-1 rounded-2xl p-10 w-[400px] h-[400px] border-gray-300 flex flex-col  gap-8 hover:bg-white hover:border-0 hover:translate-2 transition duration-300'>
                        <img src="/service1.png" alt="shipping" className='w-[80px]' />
                        <h1 className='text-[35px] font-[700]'>Free Shipping</h1>
                        <p className='text-[20px]'>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>


                    <div className=' border-1 rounded-2xl p-10 w-[400px] h-[400px] border-gray-300 flex flex-col  gap-8  hover:bg-white hover:border-0  hover:translate-2 transition duration-300'>
                        <img src="/service2.png" alt="shipping" className='w-[80px]' />
                        <h1 className='text-[35px] font-[700]'>Certified Organic</h1>
                        <p className='text-[20px]'>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>


                    <div className=' border-1 rounded-2xl p-10 w-[400px] h-[400px] border-gray-300 flex flex-col  gap-8  hover:bg-white hover:border-0  hover:translate-2 transition duration-300'>
                        <img src="/service3.png" alt="shipping" className='w-[80px]' />
                        <h1 className='text-[35px] font-[700]'>Easy Returns</h1>
                        <p className='text-[20px]'>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>


                </div>

            </section>





            <section className='flex justify-between  gap-30 items-center px-30 py-20 bg-gray-100  text-gray-900'>

                <div>
                    <img src="/hero2.png" alt="mushroom" className='w-[600px]' />
                </div>

                <div className='flex flex-col gap-10 ' >
                    <div className='flex flex-col gap-2'>
                        <p className='text-orange-600 tracking-[8px] text-[17px] font-[500] '> DETAILS</p>
                        <h1 className='text-[50px] font-[630] w-[650px]'>Mushroom created in the laps of nature.</h1>
                        <p className='text-[20px] w-[600px] font-[498]'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>

                    </div>
                    <div >
                        <button className='bg-orange-600 font-[498] text-amber-50 px-7 py-4 rounded-sm hover:bg-orange-700 font-[600] text-[20px]'>Read more</button>
                    </div>
                </div>


            </section>


            <section className='flex justify-between  gap-30 items-center px-30 py-20 bg-gray-100  text-gray-900'>

                <div className='flex flex-col gap-10 ' >
                    <div className='flex flex-col gap-2'>
                        <p className='text-orange-600 tracking-[8px] text-[17px] font-[500] '> DETAILS</p>
                        <h1 className='text-[50px] font-[630] w-[700px]'>Does your mushroom taste bad? Try us !</h1>
                        <p className='text-[20px] w-[600px] font-[498]'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>

                    </div>
                    <div >
                        <button className='bg-orange-600 font-[498] text-amber-50 px-7 py-4 rounded-sm hover:bg-orange-700 font-[600] text-[20px]'>Read more</button>
                    </div>
                </div>

                <div>
                    <img src="/hero3.png" alt="mushroom" className='w-[600px]' />
                </div>


            </section>

            <section className='flex justify-between  gap-30 items-center px-30 py-20 bg-gray-100  text-gray-900'>

                <div>
                    <img src="/hero4.png" alt="mushroom" className='w-[600px]' />
                </div>

                <div className='flex flex-col gap-10 ' >
                    <div className='flex flex-col gap-2'>
                        <p className='text-orange-600 tracking-[8px] text-[17px] font-[500] '> DETAILS</p>
                        <h1 className='text-[50px] font-[630] w-[650px]'>Mushrooms are very beneficial for the body</h1>
                        <p className='text-[20px] w-[600px] font-[498]'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>

                    </div>
                    <div >
                        <button className='bg-orange-600 font-[498] text-amber-50 px-7 py-4 rounded-sm hover:bg-orange-700 font-[600] text-[20px]'>Read more</button>
                    </div>
                </div>


            </section>


            <section className='flex flex-col justify-between  gap-20 items-center px-30 py-20 bg-gray-100  text-gray-900 overflow-hidden'>

                <div className='flex flex-col gap-3'>
                    <h1 className='text-[45px] font-[600]'>Customers say about us</h1>
                    <p className='text-gray-500 text-[17px] w-[400px]'>
                        Bring your dream home to life with one-on-one design help & hand-picked products.
                    </p>
                </div>


                <div className='flex gap-5 overflow-x-auto'>

                    <div className='flex flex-col gap-10 border-1 p-10  rounded-2xl'>

                        <div className='flex flex-col gap-3'>

                            <img src="/quotes.png" alt="quotes" className='w-[23px]' />
                            <p className='text-[15px] w-[350px] font-[498]'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>

                        </div>

                        <div className='flex gap-5 border-t-1 pt-5'>
                            <div>
                                <img src="/avatar.png" alt="profile" />
                            </div>
                            <div>
                                <h1>Mnadala Zokie</h1>
                                <p>CEO of Creative Hub</p>
                            </div>
                            <div className='flex gap-1'>
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                            </div>

                        </div>



                    </div>
                    <div className='flex flex-col gap-10 border-1 p-10  rounded-2xl'>

                        <div className='flex flex-col gap-3'>

                            <img src="/quotes.png" alt="quotes" className='w-[23px]' />
                            <p className='text-[15px] w-[350px] font-[498]'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>

                        </div>

                        <div className='flex gap-5 border-t-1 pt-5'>
                            <div>
                                <img src="/avatar.png" alt="profile" />
                            </div>
                            <div>
                                <h1>Mnadala Zokie</h1>
                                <p>CEO of Creative Hub</p>
                            </div>
                            <div className='flex gap-1'>
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                            </div>

                        </div>



                    </div>
                    <div className='flex flex-col gap-10  bg-white p-10  rounded-2xl'>

                        <div className='flex flex-col gap-3'>

                            <img src="/quotes.png" alt="quotes" className='w-[23px]' />
                            <p className='text-[15px] w-[350px] font-[498]'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>

                        </div>

                        <div className='flex gap-5 border-t-1 pt-5'>
                            <div>
                                <img src="/avatar.png" alt="profile" />
                            </div>
                            <div>
                                <h1>Mnadala Zokie</h1>
                                <p>CEO of Creative Hub</p>
                            </div>
                            <div className='flex gap-1'>
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                            </div>

                        </div>



                    </div>
                    <div className='flex flex-col gap-10 border-1 p-10  rounded-2xl'>

                        <div className='flex flex-col gap-3'>

                            <img src="/quotes.png" alt="quotes" className='w-[23px]' />
                            <p className='text-[15px] w-[350px] font-[498]'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>

                        </div>

                        <div className='flex gap-5 border-t-1 pt-5'>
                            <div>
                                <img src="/avatar.png" alt="profile" />
                            </div>
                            <div>
                                <h1>Mnadala Zokie</h1>
                                <p>CEO of Creative Hub</p>
                            </div>
                            <div className='flex gap-1'>
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                            </div>

                        </div>



                    </div>
                    <div className='flex flex-col gap-10 border-1 p-10  rounded-2xl'>

                        <div className='flex flex-col gap-3'>

                            <img src="/quotes.png" alt="quotes" className='w-[23px]' />
                            <p className='text-[15px] w-[350px] font-[498]'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>

                        </div>

                        <div className='flex gap-5 border-t-1 pt-5'>
                            <div>
                                <img src="/avatar.png" alt="profile" />
                            </div>
                            <div>
                                <h1>Mnadala Zokie</h1>
                                <p>CEO of Creative Hub</p>
                            </div>
                            <div className='flex gap-1'>
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                                <img src="/stars.png" alt="rating" className='w-[12px] h-[12px]' />
                            </div>

                        </div>



                    </div>

                </div>


            </section>



            <section className='flex flex-col justify-center gap-30 bg-gray-100  text-gray-900 relative'>
                <div className='px-30 py-20 justify-between items-center'>
                    <div className='bg-white w-[1200px] rounded-2xl px-30 py-10  flex flex-col gap-5 absolute z-10 top-1 right-40  '>
                    <h1 className='text-[45px] font-[600]'>Subscribe to our Newsletter</h1>
                    <p className='text-[18px] w-[400px]'>Mushrooms are edible fungus that can provide several important nutrients.

                    </p>
                    <div className="mx-auto mt-8 flex h-[80px] max-w-[855px] overflow-hidden rounded-2xl border border-gray-300">
                        <input type="email" placeholder='Enter your email' className="min-w-0 flex-1 bg-transparent px-10 text-lg font-medium outline-none placeholder:text-gray-600" />
                        <button className="w-[150px] bg-[#f4510b] text-lg font-bold text-white transition hover:bg-[#d94306]">Subscribe</button>

                    </div>
                </div>

                </div>

                

                <footer className='bg-black text-gray-300 px-30 pt-40 pb-5 flex flex-col gap-15 '>
                    <div className='flex gap-30 justify-between'>

                        <div className='flex flex-col gap-10'>
                            <img src="/footer-logo.svg" alt=""  className='w-40'/>
                            <p className='text-[18px] w-[280px]'>625 E Franklin Ave, Minneapolis,
                                MN 55404, USA
                            </p>
                            <p className='text-[18px]'>
                                @2022 Alien World. All rights reserved.
                            </p>
                        </div>


                        <div className='flex flex-col '>
                            <h3 className='text-[30px] font-[600] pb-8 text-white'>About us</h3>

                            <nav>
                                <ul className='flex flex-col gap-5 text-[18px]'>
                                    <li>
                                        <a href="" className='hover:text-white' >Our story</a>
                                    </li>
                                
                                    <li>
                                        <a href="" className='hover:text-white'>Designer</a>
                                    </li>

                                    <li>
                                        <a href="" className='hover:text-white'>Craftsmanship</a>
                                    </li>

                                    <li>
                                        <a href="" className='hover:text-white'>Sustainability</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>


                        <div className='flex flex-col '>
                            <h3 className='text-[30px] font-[600] pb-8 text-white'>Support</h3>

                            <nav>
                                <ul className='flex flex-col gap-5 text-[18px] '>
                                    <li>
                                        <a href="" className='hover:text-white' >FAQ's</a>
                                    </li>
                                
                                    <li>
                                        <a href="" className='hover:text-white'>Shipping&Returns</a>
                                    </li>

                                    <li>
                                        <a href="" className='hover:text-white'>Care guide</a>
                                    </li>

                                    <li>
                                        <a href="" className='hover:text-white'>Price List</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>


                        <div className='flex flex-col  '>
                            <h3 className='text-[30px] font-[600] pb-8 text-white'>Contact us</h3>
                            <div className='flex flex-col gap-5'> 
                                 <div className='flex items-center gap-2'>
                                <img src="/phone.svg" alt="" />
                                <p className='hover:text-white'>+1253 211 523</p>
                            </div>

                            
                            <div  className='flex items-center gap-2'>
                                <img src="/envelop.svg" alt="" />
                                <p className='hover:text-white'>hello@shopping.com</p>
                            </div>

                            </div>

                        </div>



                    </div>


                    <div className='flex gap-10 border-t-2 border-gray-200 p-10 justify-center text-[18px]'>

                        <p>Privacy Policy</p>
                            <span>|</span>

                        
                            <p>Privacy Policy</p>
                            <span>|</span>

                        
                            <p>Privacy Policy</p>
                            <span>|</span>



                    </div>


                </footer>


            </section>






        </div>
    )
}

export default Hero