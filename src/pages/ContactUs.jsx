import React,  {useState}from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/login.css';
import registerImg from '../assets/images/login.jpg'
import Newsletter from "../shared/Newsletter";
import contactImg from '../assets/images/Contact.png';
const Register = () => {

    const [credentials, setCredentials] = useState({
        userName:undefined,
       email:undefined,
       password:undefined
    })

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };


    const handleClick = e =>{
        e.preventDefault()
    };
    return (

    <section>

    <Container>
        <Row>
            <Col lg='9' className="m-auto">
                <div className="login__container d-flex justify-content-between">
                    <div className= "login__img">
                        <img src={contactImg} alt="" />
                   </div>
                   <div className="login__form">
                    <div className="user">
                         </div>
                         <h2>Contact Us</h2>
                         <Form onSubmit={handleClick}>
                            <FormGroup>
                                <input type ="email" placeholder="Email" required id="email" onChange={handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <input type ="longtext" placeholder="query" required id="query" onChange={handleChange}/>
                            </FormGroup>
                            <button className="btn secondary__btn auth__btn" type= "submit">Contact Us</button>
                         </Form>

                   </div>
                </div>
            </Col>
        </Row>
    </Container>
    <Newsletter />
  </section>
    );
    
}

export default Register;