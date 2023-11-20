import React from 'react'

function AboutusContent () {
  return (
    <div className='container mx-auto lg:px-14 px-5 mt-10'>
      <h1 className='text-center font-ssp text-3xl font-semibold text-black'>
        Welcome to <span className='text-blue-900'>Fabricatology !</span>
      </h1>
      <h1 className='text-center font-ssp text-3xl font-semibold text-black'>
        Your Premier Metal Fabrication Destination!
      </h1>
      <div className='flex flex-col gap-3 '>
        <p className='font-lato font-medium text-base mx-10 text-center'>
          Fabricatology is the ultimate destination for all your metal
          fabrication needs. With a steadfast commitment to excellence and a
          wealth of experience under our belt, we have established ourselves as
          the top choice for both businesses and individuals seeking
          professional and reliable metal fabrication services.
        </p>
        <p className='font-lato font-medium text-2xl mx-10 text-center'>
          What sets us apart
        </p>
        <p className='font-lato font-medium text-base mx-10 text-center'>
          Our team of skilled artisans and engineers boasts a wealth of
          knowledge and hands-on experience, capable of turning your metal
          project ideas into reality, no matter the complexity.
        </p>

        <p className='font-lato font-medium text-base mx-10 text-center'>
          With years of experience and a commitment to excellence, we have
          become the go-to choice for businesses and individuals looking for
          reliable and professional metal fabrication services.
        </p>
      </div>
    </div>
  )
}

export default AboutusContent
