import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex flex-wrap gap-9 justify-center'>
      {
        services.map((service)=>(
          <div className=''>
            <ServiceCard key={service.label} {...service} />
          </div>
        ))
      }
    </section>
  )
}

export default Services