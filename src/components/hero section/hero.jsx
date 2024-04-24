import React from 'react'
import bgimage from '../../../public/Logo/vector3.png'
import img1 from '../../../public/Logo/biryani.png'
import img2 from '../../../public/Logo/biryani2.png'
import img3 from '../../../public/Logo/biryani3.png'
import { useState } from 'react'

const Hero = () => {

    const [imageID , setImageID] = useState(img2)
    const imgList = [
        {
            id: 1,
            img: img1
         },
         {
            id: 2,
            img: img2
         },
         {
            id:3,
            img: img3
         }

]

    const bgImage = {
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        width:'100%',
        height:"100%",
    }

  return (
    <div style={bgImage}
        className='min-h-[590px] bg-gray-950 flex justify-center items-center'>        
    <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center text-right gap-2'>
                <h1 className='text-[66px] text-white font-bold text-left ml-10'> Welcome to the <span className='text-yellow-400'>Foodie</span> Zone
                 </h1>
                <p className='text-white text-left ml-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint ex quod quos neque reprehenderit nihil suscipit iure vero deserunt.
                </p>
                <div className='mt-3 flex items-start ml-10'>
                <button className='bg-yellow-400 hover:bg-opacity-50  text-white
                 font-semibold px-4 py-2 rounded-lg  cursor-pointer hover:scale-105 duration-200'>
                     Order Now
                </button>
                </div>
            </div>
            
            <div className='flex justify-center items-center h-[300px]  overflow-hidden'>
                
                 <img src={imageID} alt='biryani' className='w-[300px] mx-auto spin'/>

                <div className='flex flex-col gap-8 relative justify-center mr-20 bottom-[0px] bg-white/30 rounded-full '>
                    {
                        imgList.map((item)=>(
                            <img key={item.id}
                             src={item.img} 
                             alt='pics'
                              className='max=w=[80px] h-[80px] 
                           hover:scale-105 duration-200 object-contain inline-block'
                            onClick={
                                ()=>{
                                    setImageID(item.id === 1 ? img1 : item.id===2 ? img2 : img3)
                                }
                            }
                           />
                        ))
                    }
                </div>
            </div>
            
    </div>   
    </div>
  )
}

export default Hero
