import React from "react";
import { Row, Col } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
    return (
        <>
            <section>
                <Row className="r">
                    <Col>
                        <h1>DUBvelopers</h1>
                        <p>Registered student organization at the <b>University of Washington</b> providing
                            a technical foundation for students through web development
                            and design curriculum and real world projects.</p>
                        <Row>
                            <Col>
                                <h4>Organizations ...</h4>
                                <button className="button1">Request a website</button>
                            </Col>
                            <Col>
                                <h4>Students ...</h4>
                                <button className="button2">Join our community</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="img">
                        <img src={require("./images/header.png")} alt="Img"/>
                    </Col>
                </Row>
            </section>

            <section className="content">
                <Row className="r">
                    <Col className="img">
                        <img src={require("./images/design.png")} alt="Img"/> 
                    </Col>
                    <Col>
                        <h1>Design</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi architecto beatae vitae dicta.</p>
                        <a href="https://localhost:3000">Join us in designing &#8594;</a>
                    </Col>
                </Row>

                <Row className="r">
                    <Col>
                        <h1>Development</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi architecto beatae vitae dicta.</p>
                        <a href="https://localhost:3000">Join us in developing &#8594;</a>
                    </Col>
                    <Col className="img">
                        <img src={require("./images/coding.png")} alt="Img"/>
                    </Col>
                </Row>
            </section>

            <section style={{textAlign: "center"}}>
                <p style={{marginBottom: "10vh"}}>DUBvelopers aims to [mission statement] sed ut perspiciatis unde omnis 
                    iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>

                <Row className="r">
                    <Col className="container">
                        <h4>Community</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                            qui blanditiis praesentium.</p>
                        <img src={require("./images/community.png")} alt="Img"/>
                    </Col>
                    <Col className="container">
                        <h4>Service</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                            qui blanditiis praesentium.</p>
                        <img src={require("./images/service.png")} alt="Img"/>
                    </Col>
                    <Col className="container">
                        <h4>Learning</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                            qui blanditiis praesentium.</p>
                        <img src={require("./images/learning.png")} alt="Img"/>
                    </Col>
                </Row>
            </section>

            <Footer/>
        </>
    );
}

export default Home;