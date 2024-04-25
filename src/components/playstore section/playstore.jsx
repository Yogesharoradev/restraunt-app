import React from 'react'

const Playstore = () => {
  return (
    <div className='min-h-[200px] bg-gray-900 text-white'>
      <div className='grid grid-cols-2'>
        <div className='flex justify-center items-center flex-col gap-5'>
            <p className='font-semibold text-3xl text-gray-500 mt-8'>Foodly is Available for Android and IOS</p>
            
            <div className='flex'> 
            <a href='#'> 
            <img alt='apple' src='\Logo\app_store.png' className='max-w-[150px]'/>
            </a>
            <a href='#'>
            <img alt='android' src='\Logo\play_store.png' className='max-w-[150px]'/>
            </a>
            </div>
            
        </div>

        <div>
            <img alt='bullet' src='\Logo\mobile_bike.gif' className='p-8 max-w-[350px] mx-auto'/>
        </div>
      </div>
    </div>
  )
}

export default Playstore
