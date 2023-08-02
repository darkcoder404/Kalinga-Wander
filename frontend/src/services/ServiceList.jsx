import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `User Reviews and Ratings`,
      desc: `Experience the World's Best, Rated by Travelers like You`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Unlock Boundless Adventures with our Ultimate  Experience.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customized Holiday Packages',
      desc: `Your Dream Getaway, Tailored to Perfection with your own modifications.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList