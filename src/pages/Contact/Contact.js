import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Button,
    FormLabel,
    FormGroup,
    FormControl
} from "react-bootstrap";
import Footer from "../Footer/Footer";

import emailjs from '@emailjs/browser';

import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateForm = () => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return name.length >= 1 && regex.test(email.toLowerCase()) && message.length >= 1;
    }

    const handleSubmit = event => {
        event.preventDefault();        

        emailjs.sendForm("service_l6y2cjv", "template_1tq4beb", event.target, "gowIH7P83sDSmGBpM")
            .then((result) => {
                alert('Your message has been received. Thank you.');
                setName("");
                setEmail("");
                setMessage("");
            }, (error) => {
                alert('An error occured. Please send your message again.');
            });
    }

    return (
        <>
            <div className="contact">
                <Row>
                    <Col>
                        <h1>Let’s chat</h1>
                        <p>Got a project request? Interested in learning more? Curious about how much we can help you? Want to partner up?</p>
                        <p>Fill out this form and we’ll be in contact faster than you can design and develop a button.</p>
                        <p>Alternatively, contact individual members through <Link className="teamLink" to="/team">our team page</Link> for specific help.</p>
                    </Col>

                    <Col>
                    <form onSubmit={handleSubmit}>
                        <FormGroup name="from_name" controlId="from_name" className={"form-group"}>
                            <FormLabel>Name</FormLabel>
                            <FormControl
                                name="from_name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className={"form-input"}
                                placeholder={"John Doe"}
                            />
                        </FormGroup>

                        <FormGroup name="reply_to" controlId="reply_to" className={"form-group"}>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                name="reply_to"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={"form-input"}
                                placeholder={"loremipsum@gmail.com"}
                            />
                        </FormGroup>

                        <FormGroup name="message" controlId="message">
                            <FormLabel>Message</FormLabel>
                            <FormControl
                                name="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                as="textarea"
                                className={"form-input form-input-message"}
                                placeholder={"Your story ..."}
                            />
                        </FormGroup>

                        {/*Button - submits form*/}
                        <div className={"loginBtn"}>
                            <Button block bsSize="large" disabled={!validateForm()} type="submit" className="button1" id={"send-btn"}>
                                Submit
                            </Button>
                        </div>
                    </form>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;