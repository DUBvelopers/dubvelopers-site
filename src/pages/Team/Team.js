import React, { useState } from "react";
import { Button } from '@mui/material';
import useGoogleSheets from 'use-google-sheets';
import Footer from "../Footer/Footer";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Collapse from 'react-bootstrap/Collapse';

import "./Team.css";

const Team = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_API_KEY,
        sheetId: process.env.REACT_APP_SHEET_ID,
        sheetsNames: ['Team'],
    });
    const [open, setOpen] = useState(new Array(data.length).fill(false));
    console.log(open);  

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }
    console.log(data);
    const teamMembers = data[0].data;
    console.log(teamMembers);
    
    async function callFunction(arr, index, size) {
        let arr2 = new Array(size);
        for (let i = 0; i < arr.length; i++) {
            if (i == index) {
                arr2[i] = !arr[i];
            }
        }
        setOpen(arr2);
    }

    async function externalWebsite(link) {
        window.location.href=link;
    }
    

    return (
        <>
            <section id="team">
                <h3>Our Team</h3>
                <Row xs={1} md={3} className="g-4">
                    {teamMembers.map((value, index) => (
                        <Col>
                            <Card id="cardStyle">
                                <Card.Img variant="top" src={value["Profile Picture"].replace("open?", "uc?export=view&")} />
                                <Card.Body>
                                    <Card.Title onClick={() => externalWebsite(value["Linkedin Profile/GitHub Profile/Personal Website"])}>{value["Name"]}</Card.Title>
                                    <Card.Subtitle>{value["Role"]}</Card.Subtitle>
                                    <Card.Text>{value["Pronouns"]}</Card.Text>
                                    <Card.Footer>
                                        <Button
                                            onClick={() => callFunction(open, index, teamMembers.length)}
                                            aria-controls={"example-collapse-text".concat(index)}
                                            aria-expanded={open[index]}
                                            variant="light"
                                        >
                                            Learn more about me...
                                        </Button>
                                        <Collapse in={open[index]}>
                                            <div id={"example-collapse-text".concat(index)}>
                                                {value["Description"]}
                                            </div>
                                        </Collapse>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
            <Footer />
        </>
    );
}

export default Team;