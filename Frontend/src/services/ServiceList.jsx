import React from 'react'
import { Col } from 'reactstrap'
import customizationImg from '../file/image/customization.png'
import guideImg from '../file/image/guide.png'
import weatherImg from '../file/image/weather.png'
import ServiceCard from './ServiceCard'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Calculate weather before hand.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `We provide highly qualified tour guides.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `you can customise your experience by talking to our agent.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-2' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList