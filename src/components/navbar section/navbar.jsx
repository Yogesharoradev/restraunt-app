import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='shadow-md
    bg-gray-900
    text-white duration-200'>
      <div className='container'>
      <div className="flex justify-between items-center p-3">
        <div className='ml-9'>
            <a href='#' className='flex items-center gap-2 text-2xl font-semibold'>
                <img src="\public\Logo\food-logo.png" alt="Foodie zone"
                 className='w-16' />
                Foodie             
             </a>
        </div>
       
        <div className='flex items-center gap-4'> 
            <ul className='flex gap-4'>
                <li>
                 <a href='#' className='inline-block p-4 hover:text-yellow-400'>Home</a>
                </li>
                <li>
                <a href='#' className='inline-block p-4 hover:text-yellow-400'>About</a>
                </li>
                <li>
                <a href='#' className='inline-block p-4 hover:text-yellow-400'>Contact</a>
                </li>
            </ul>
            <button className='bg-yellow-400 hover:bg-opacity-50 
             font-semibold px-4 py-2 rounded-lg  cursor-pointer'> Order 🛒
             </button>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
