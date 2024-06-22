import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import newsLetter from '../assets/images/newsletter.png'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe for Exclusive Travel Insights</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email'></input>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Stay updated with the latest travel tips, destination guides, and exclusive offers. 
                    Don't miss out on the adventure of a lifetime. Subscribe now!
                    </p>
                </div>
            </Col>
            <Col className='newsletter__img'>
                <img src={newsLetter} alt="" />
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter