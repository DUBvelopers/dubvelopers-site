import React, { useState } from "react";
import { Route } from 'react-router-dom';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useGoogleSheets from 'use-google-sheets';
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Footer from "../Footer/Footer";
import Collapse from 'react-bootstrap/Collapse';
import "./Project.css";
import { FaCrown } from "react-icons/fa";


const Project = () => {
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
    console.log(projectData);
    console.log(projectData[0]["Project Name"]);

    return (
        <>
            <section id="projects">
                <h3>Projects</h3>
                <Row xs={1} md={3} className="g-4">
                    {projectData.map((value, index) => (
                        <Col>

                            <Card id="cardStyle">
                                <Card.Img style={{ height: "50" }} className="profImg" variant="top" src={value["Picture URL"].replace("open?", "uc?export=view&")} />
                                <Card.Body>
                                    <Card.Title>{value["Project Name"]}</Card.Title>
                                    <Card.Subtitle>{value["Group Type"]}</Card.Subtitle>

                                    <a href={"/project/" + index}><Card.Text className="linkBtn">View More Details</Card.Text></a>
                                </Card.Body>
                            </Card>

                        </Col>


                    ))}
                </Row>
            </section>

            <Footer />
        </>
    );
};

export default Project