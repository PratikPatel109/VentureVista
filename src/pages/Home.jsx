
import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/bali.jpg';
import heroImg01 from '../assets/images/heroimg1.jpg';
import heroImg02 from '../assets/images/heroimg2.jpg';
// import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/travel.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



const Home = () => {
    return <> 
        { /* ======================= Hero Section Start ================= */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You Go'}/>
                                <img id= "world" src={worldImg} alt="" />
                            </div>
                            <h1>Travel Opens Doors to Unforgettable <span className="highlights">Memories</span></h1>
                            <p>Embark on a journey to the most breathtaking destinations around the globe. Explore hidden gems, experience diverse cultures, and create memories that last a lifetime.
                            </p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box hero__video-box mt-4">
                            <img src={heroImg01} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>
                    { <SearchBar /> }
                </Row>
            </Container>
        </section>
        { /* ======================= Hero Section Start ================= */}

        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services__subtitle">
                            what we serve
                        </h5>
                        <h2 className="services__title">
                            Tailored Experiences Just for You
                        </h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>
        { /* ======================= Featured Tour section start  ================= */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle subtitle={'Explore'}></Subtitle>
                        <h2 className="featured__tour-title">Discover Our Featured Tours</h2>
                    </Col>
                    <FeaturedTourList />
                </Row>
            </Container>
        </section>
        { /* ======================= Featured Tour section end ================= */}
        { /* ======================= Experience section start ================= */}

        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience_content">
                            <Subtitle subtitle={'Experience'}/>
                            <h2>With Decades of Experience <br /> we will serve you</h2>
                            <p>With over 20 years of expertise in crafting unforgettable journeys, we bring you the best travel experiences. Let us be your trusted companion in exploring the world.</p>
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
        <section>
            <Container>
                <Row>
                    <Col lg = '12'>
                        <Subtitle subtitle={'Fans Love'} />
                        <h2 className="testimonial__title">Words from Our Happy Travelers</h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials />
                    </Col>
                </Row>
            </Container>
        </section>

        { /* ======================= testimonial section end ================= */}
        < Newsletter />
    </>
    
};

export default Home;