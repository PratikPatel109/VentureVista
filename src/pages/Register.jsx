import React,  {useState, useContext}from "react";
import { Container, Row, Col, Form, FormGroup} from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import registerImg from '../assets/images/login.jpg'
import userIcon from '../assets/images/user.png'

// import { validateRegistration, saveCredentialsToLocalStorage } from "../utils/auth"

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
    });

    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setError((prev) => ({ ...prev, [e.target.id]: '' }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'post',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(credentials)
            })
            const result = await res.json()

            if(!res.ok) alert(result.message)

            dispatch({type:'REGISTER_SUCCESS'})
            navigate('/login');

        } catch (err) {
            alert(err.message);
        }

        // const validationErrors = validateRegistration(credentials.username, credentials.email, credentials.password);

        // if (validationErrors.username || validationErrors.email || validationErrors.password) {
        //     setError(validationErrors);
        //     return;
        // }
        // saveCredentialsToLocalStorage(credentials);
        // navigate('/login');
    };

    return (
    <section>

    <Container>
        <Row>
            <Col lg='9' className="m-auto">
                <div className="login__container d-flex justify-content-between">
                    <div className= "login__img">
                        <img src={registerImg} alt="" />
                   </div>
                   <div className="login__form">
                    <div className="user">
                        <img src =  {userIcon} alt="" />
                         </div>
                         <h2>Register</h2>
                         <Form onSubmit={handleClick} noValidate>
                                    <FormGroup>
                                        <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
                                        {error.username && <p className="error-message">{error.username}</p>}
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                                        {error.email && <p className="error-message">{error.email}</p>}
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                                        {error.password && <p className="error-message">{error.password}</p>}
                                    </FormGroup>
                                    <button className="btn secondary__btn auth__btn" type="submit">Create Account</button>
                                    <p> Already have any account? <Link to='/login'>Login</Link> </p>
                         </Form>

                   </div>


                </div>
            </Col>
        </Row>
    </Container>
  </section>
    );
    
}

export default Register;