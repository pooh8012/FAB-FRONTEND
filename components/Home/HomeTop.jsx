import Image from 'next/image'
import React from 'react'
import Home from '../../public/Assets/hometop.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Pick from '../../public/Assets/P.png'

function HomeTop () {
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    lazyLoad: true,
    speed: 900,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 2,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
  }

  return (
    <div className='m-0 p-0 mt-1'>
      <div className=''>
        {/* <div className=" bg-black opacity-50 w-full h-full"></div> */}
        <Slider {...settings}>
          <div className=''>
            <Image
              src={Pick}
              // src="https://res.cloudinary.com/dh7xchikj/image/upload/v1674894184/Pooja%20Project/ahsanization-mJi2I9KJPQ8-unsplash_pot5bc.jpg"
              alt=''
              width={1000}
              height={1000}
              className='w-full h-[43rem] object-cover'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/dh7xchikj/image/upload/v1674894181/Pooja%20Project/christopher-burns-8KfCR12oeUM-unsplash_syx6n6.jpg'
              alt=''
              width={1000}
              height={1000}
              className='w-full h-[43rem] object-cover'
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default HomeTop
