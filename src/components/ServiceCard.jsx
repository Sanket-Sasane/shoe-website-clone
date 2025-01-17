import React from 'react'

const ServiceCard = ({imgURL,label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-3xl shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 flex justify-center items-center rounded-full bg-coral-red'>
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='text-3xl font-palanquin font-bold mt-5 leading-normal'>{label}</h3>
        <p className='text-lg text-slate-gray font-montserrat leading-normal mt-6 break-words'>{subtext}</p>
    </div>
  )
}

export default ServiceCard