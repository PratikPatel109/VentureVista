import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/person.jpg';
import ava02 from '../../assets/images/person1.jpg';
import ava03 from '../../assets/images/person2.jpg';

const Testimonials = () => {
    
    const settings= {
        dots:true,
        isFinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1,
                },
            },
        ]
    }
    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>"Absolutely amazing experience! The trip was well-organized, and I got to explore breathtaking landscapes. I can't wait for my next adventure with this team!"</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>john Doe</h5>
                        <p>Travel Enthusiast</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>"Amazing customer service and attention to detail. They made sure every aspect of my trip was perfect. I highly recommend their services!"</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Chris lynn</h5>
                        <p>Adventure Seeker</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>"A trip of a lifetime! I got to immerse myself in different cultures and explore stunning landmarks. Thank you for an unforgettable experience!"</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Franklin James</h5>
                        <p>Travel Enthusiast</p>
                    </div>
                </div>
            </div>

        </Slider>
    );
};
export default Testimonials;