import React from 'react'

const Footer = () => {
  return (
    <div className='min-h-[400px] bg-gray-900 text-white text-center'>
      <div className='grid grid-cols-4 p-8'>
            <div className='flex flex-col items-center justify-center'>
                <div className=''>
                <a href='#' className='flex items-center gap-2 text-2xl font-semibold'>
                <img src="\public\Logo\food-logo.png" alt="Foodie zone"
                 className='w-16' />
                Foodie             
             </a>
                </div>
                <p className='text-start ml-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo
                    , tempore eum tenetur.</p>
                <div className='mt-3 flex flex-col gap-3'>
                    <p>🏨 Noida, Uttar Pradesh</p>
                    <p className='mr-8'> 📞  +91 123456789</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'> 
                <h1 className='font-semibold text-xl'>Important Links</h1>
                <a href='#'> Home </a>
                <a href='#'> Contact </a>
                <a href='#'> About </a>
                <a href='#'> Services </a>
                <a href='#'> Login </a>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'> 
                <h1 className='font-semibold text-xl'>Important Links</h1>
                <a href='#'> Home </a>
                <a href='#'> Contact </a>
                <a href='#'> About </a>
                <a href='#'> Services </a>
                <a href='#'> Login </a>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'> 
                <h1 className='font-semibold text-xl'>Important Links</h1>
                <a href='#'> Home </a>
                <a href='#'> Contact </a>
                <a href='#'> About </a>
                <a href='#'> Services </a>
                <a href='#'> Login </a>
            </div>
      </div>

     
     
      <hr className='w-[90%] ml-10'/>
    
    <p className='text-center mt-6'>@copyright 2024 All rights reserved || Made with ❤️ by Yogesh</p>
    </div>
  )
}

export default Footer
