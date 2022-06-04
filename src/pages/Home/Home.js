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
                        <p>DUBvelopers is a web development and web design RSO at the <strong>University of Washington Seattle<\strong>. 
                            We provide a technical foundation for students through our web development and design curriculum, 
                            in order to develop their skills and eventually work on projects for underserved
                            communities and organizations throughout Seattle.
                        </p>
                        <Row>
                            {/*<Col>
                                <h4>Organizations ...</h4>
                                <button className="button1">Request a website</button>
                            </Col>*/}
                            <Col>
                                <h4>Students ...</h4>
                                <a href="https://discord.gg/FNgd38xhtf" target="_blank" rel="noreferrer">
                                    <button className="button2" href="https://discord.gg/FNgd38xhtf">Join our community</button>
                                </a>
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
                        <p>Students will attend custom beginner friendly workshops where they will learn
                        the fundamentals of design theory using Figma, with a focus on interaction and 
                        web design to give them a head start in joining a design team project. 
                     </p>
                        <a href="https://discord.gg/FNgd38xhtf" target="_blank" rel="noreferrer">Join us in designing &#8594;</a>
                    </Col>
                </Row>

                <Row className="r">
                    <Col>
                        <h1>Development</h1>
                        <p>Students will attend custom beginner friendly workshops where they 
                           will learn the fundamentals of web development. 
                        </p>
                        <a href="https://discord.gg/FNgd38xhtf" target="_blank" rel="noreferrer">Join us in developing &#8594;</a>
                    </Col>
                    <Col className="img">
                        <img src={require("./images/coding.png")} alt="Img"/>
                    </Col>
                </Row>
            </section>

            <section style={{textAlign: "center"}}>
                <p style={{marginBottom: "10vh"}}>DUBvelopers aims to make web development/design and websites accessible by 
                            providing access to beginner friendly workshops in web development coding 
                            and design and creating pro bono projects for the community. </p>

                <Row className="r">
                    <Col className="container">
                        <h4>Community</h4>
                        <p>Create an inclusive community within our club where people of all different backgrounds and skill levels are encouraged to join. </p>
                        <img src={require("./images/community.png")} alt="Img"/>
                    </Col>
                    <Col className="container">
                        <h4>Service</h4>
                        <p>Serve and uplift the community by providing pro bono websites, 
                                  with a focus on underserved and minority communities, UW organizations, and local businesses. </p>
                        <img src={require("./images/service.png")} alt="Img"/>
                    </Col>
                    <Col className="container">
                        <h4>Learning</h4>
                        <p>Provide access to tailored web development and design workshops created by our 
                        amazing Design and Coding Officers! The curriculum is vetted by our club advisor
                        who is a professor at the Allen school. </p>
                        <img src={require("./images/learning.png")} alt="Img"/>
                    </Col>
                </Row>
            </section>

            <Footer/>
        </>
    );
}

export default Home;
