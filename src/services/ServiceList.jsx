

import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weathericon.png'
import guideImg from '../assets/images/guide-line.png'
import customizationImg from '../assets/images/wallet-3-fill.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Tours are provided after accurate weather prediction"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Excellent tour guide provided with tours"
    },
    {
        imgUrl: customizationImg,
        title: "Affordable",
        desc: "Affordable Prices which every one can afford"
    },
]

const ServiceList = () => {
    return (
        <>
        {servicesData.map((item, index) => (
            <Col lg="3" md='6' sm='12' className='mb-4' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
        </>
    );
};

export default ServiceList