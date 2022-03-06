import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useGoogleSheets from 'use-google-sheets';
// require('dotenv').config();

const Team = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_API_KEY,
        sheetId: process.env.REACT_APP_SHEET_ID,
        sheetsNames: ['Team'],
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    const teamMembers = data[0].data;
    console.log(teamMembers);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Our Team</h1>
            {teamMembers.map((value, index) => (
                <div style={{ display: "inline-block" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={value["Profile Pic"]}
                                alt={value["Name"]}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {value["Name"]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {value["Description"]}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                {index}
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Team;