
import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from "reactstrap";
import experienceImg from '../assets/images/about1.png';
import Subtitle from "../shared/Subtitle";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



const About = () => {
    return <> 
        { /* ======================= Experience section start ================= */}

        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience_content">
                            <Subtitle subtitle={'Experience'}/>
                            <h2>With Decades of Experience <br /> we will serve you</h2>
                            <p>With over 20 years of expertise in crafting unforgettable journeys, we bring you the best travel experiences. Let us be your trusted companion in exploring the world.</p>
                            <p>"With a commitment to exceptional service and a passion for exploration, we strive to turn your travel dreams into unforgettable realities. Whether you seek the thrill of adventure or the tranquility of serene getaways, Venture Vista is your trusted companion on every journey."</p>
                        </div>

                        <div className="counter_wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Satisfied Clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years of Excellence</h6>
                            </div>
                        </div>


                    </Col>
                    <Col lg="6">
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>



        { /* ======================= Experience section end ================= */}

        { /* ======================= gallery section Start ================= */}
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={"Gallery"} />
                        <h2 className="gallery__title">
                        Dive into Our Customer's Adventures
                        </h2>
                    </Col>
                    <Col lg="12">
                        <MasonryImagesGallery />
                    </Col>
                </Row>
            </Container>
        </section>
        { /* ======================= gallery section end ================= */}

        { /* ======================= testimonial section Start ================= */}
        {/* <section>
            <Container>
                <Row>
                    <Col lg = '12'>
                        <Subtitle subtitle={'Fans Love'} />
                        <h2 className="testimonial__title">What our Fans say about us</h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials />
                    </Col>
                </Row>
            </Container>
        </section> */}

        { /* ======================= testimonial section end ================= */}
        < Newsletter />
    </>
    
};

export default About;