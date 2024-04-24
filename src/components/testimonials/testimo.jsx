
import React from 'react';
import Slider from 'react-slick';


const Testimo = () => {

    const testimonialData = [
        {
          id: 1,
          name: "Samuel",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/101/101",
        },
        {
          id: 1,
          name: "John Doe",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/102/102",
        },
        {
          id: 1,
          name: "Smith",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/103/103",
        },
      ];
      
      

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
      };

  return (
    <div className='min-h-[600px] flex flex-col items-center text-center bg-gray-950 py-10 gap-2'>
      <span className='text-yellow-300 text-sm'>Testimonials</span>
      <h1 className='text-white font-bold text-3xl'>Testimonials</h1>
      <p className='text-gray-400 text-xs justify-center'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?
      </p>

      <div
            className="grid grid-cols-1 max-w-[530px] mx-auto gap-6  bg-gray-800 mt-12"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center  shadow-lg p-4 mx-4 rounded-xl  relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl text-white font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

      </div>
  )
}

export default Testimo
