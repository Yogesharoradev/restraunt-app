import React from 'react'
import img1 from '../../assets/Logo/biryani2.png'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
  } from "react-icons/fa";

const Service = () => {

    const ServiveData = [
        {
            id:1,
            img: img1,
            name : "Biryani",
            description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
        },
        {
            id:2,
            img: img1,
            name : "Chicken Curry",
            description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
        },
        {
            id:3,
            img: img1,
            name : "Hydrabadi Biryani",
            description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
        },
    ];

    
  return (
    <div className='min-h-[800px] flex flex-col items-center text-center bg-gray-950 py-10 gap-2'>
      <span className='text-yellow-300 text-sm'>Our services</span>
      <h1 className='text-white font-bold text-3xl'>Services</h1>
      <p className='text-gray-400 text-xs justify-center'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?
      </p>

      <div className='grid grid-cols-3 mt-[70px] gap-14 place-items-center'>
            {
                ServiveData.map((item)=>(
                    <div key={item.id} className='bg-gray-900 max-w-[350px] hover:bg-yellow-500 duration-300
                     rounded-2xl group p-4'>
                        <div>
                        <img alt='photo' src={item.img} className='max-w-[200px] mx-auto block transform -translate-y-14
                        group-hover:scale-105 group-hover:rotate-6 duration-300 shadow-l' />
                        
                        <div className='text-white text-center'>
                            <h1 className='font-bold text-xl'>{item.name}</h1>
                            <p className='text-gray-500 text-sm line-clamp-2'>{item.description}</p>
                        </div>

                        </div>
                    </div>
                    
                ))
            }
      </div>

                <div className='grid grid-cols-2'>
                    
                    <div className='flex items-center justify-center mt-8 ml-4'>
                        <img alt='pic' src='\src\assets\Logo\biryani3.png' className='mx-auto max-w-[400px]'/>
                    </div>


                    <div className='flex justify-center flex-col gap-6'>
                        <h1 className='text-white font-semibold text-start text-5xl mt-9'>Lorem Ipsum Dorem</h1>
                        <h2 className='text-base text-gray-600 text-start' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste
                         ratione ex alias quis magni at optio</h2>
                        <h2 className='text-base text-gray-600 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, 
                        exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae. Excepturi 
                        totam ad nam velit quasi quidem aspernatur.</h2>

                        <h1 className='text-white font-semibold text-start text-3xl'>Follow us for more details </h1> 
                   
                            <div className="flex items-center gap-4 mt-4">
                                <a href="#">
                                    <FaInstagram className="text-5xl text-pink-600" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-5xl text-blue-800" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-5xl text-rose-400" />
                                </a>
                       </div>
                        </div>      

                </div>



    </div>

  )
}

export default Service
