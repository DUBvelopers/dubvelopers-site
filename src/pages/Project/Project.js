import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useGoogleSheets from 'use-google-sheets';

import Footer from "../Footer/Footer";
import "./Project.css";


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
            <section >
                <h3>Projects</h3>
                {projectData.map((value, index) => (
                    <div class="cardClass" style={{ display: "inline-block" }}>
                        <Card class="cardStyle">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={value["Picture URL"]}
                                    alt={value["Project Name"]}
                                />
                                <CardContent class="cardContent">
                                    <Typography variant="h5">
                                        <p class="textStyle">{index + 1}. {value["Project Name"]}</p>

                                    </Typography>

                                    <Typography >
                                        <p class="textStyle2">{value["Group Type"]}</p>
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" class="textStyle3">
                                        {value["Leads"].split(", ").map((val, i) => (
                                            <li>{val}</li>
                                        ))}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button class="btnColor" size="medium" color="primary">
                                    <a href={value["Project URL"]}>View Project</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </section>

            <Footer />
        </>
    );
};

export default Project