import React from "react";
import useGoogleSheets from 'use-google-sheets';

import Footer from "../Footer/Footer";

import { FaCrown } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';

import "./IndProject.css";

const IndProject = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_API_KEY,
        sheetId: process.env.REACT_APP_SHEET_ID,
        sheetsNames: ['Projects'],
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    const projectData = data[0].data;

    let url = window.location.href;
    console.log(typeof projectData[parseInt(url.split("/")[5])]);

    if (typeof projectData[parseInt(url.split("/")[5])] != "undefined") {
        return (
            <>
                <div className="project">
                    <h1>{projectData[parseInt(url.split("/")[5])]["Project Name"]}</h1>
                    <p>"{projectData[parseInt(url.split("/")[5])]["Tagline"]}"</p>

                    <h3 style={{ textAlign: "left", marginBottom: "20px" }}>Members</h3>

                    <Row className="left">
                        <Col>
                            <h5 className="memberType">Coding</h5>
                            <ul className="list">
                                {projectData[parseInt(url.split("/")[5])]["Coding Leads"].split(", ").map((val, i) => (
                                    <li className="student">
                                        <img src={require("./coding.png")} className="memberImg" alt="Profile" />
                                        {val} <FaCrown />
                                    </li>
                                ))}

                                {projectData[parseInt(url.split("/")[5])]["Coding Members"].split(", ").map((val, i) => (
                                    <li className="student">
                                        <img src={require("./coding.png")} className="memberImg" alt="Profile" />
                                        {val}
                                    </li>
                                ))}
                            </ul>
                        </Col>

                        <Col>
                            <h5 className="memberType">Design</h5>
                            <ul className="list">
                                {projectData[parseInt(url.split("/")[5])]["Design Leads"].split(", ").map((val, i) => (
                                    <li className="student">
                                        <img src={require("./design.png")} className="memberImg" alt="Profile" />
                                        {val} <FaCrown />
                                    </li>
                                ))}

                                {projectData[parseInt(url.split("/")[5])]["Design Members"].split(", ").map((val, i) => (
                                    <li className="student">
                                        <img src={require("./design.png")} className="memberImg" alt="Profile" />
                                        {val}
                                    </li>
                                ))}
                            </ul>
                        </Col>

                        <Col>
                            <img src={projectData[parseInt(url.split("/")[5])]["Picture URL"].replace("open?", "uc?export=view&")}
                                alt="Project" className="projectImg" />
                        </Col>

                    </Row>

                    <p className="description">{projectData[parseInt(url.split("/")[5])]["Description"]}</p>
                    <a href={projectData[parseInt(url.split("/")[5])]["Project URL"]}
                        className="view button1">View Project</a>
                </div>
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <p>Error. No such project exists.</p>
            </>
        )
    }
}

export default IndProject;