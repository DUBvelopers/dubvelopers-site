import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const teamMembers = ["Quan Huie", "Alaina Olson", "Anthony Luong", "Renee Chien", "Osiris Cruz",
    "Nancy Le", "Eric Xiao", "Alan Gonzalez", "Atharva Kashyap", "Generous Yeh"];

const Team = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Our Team</h1>
            {teamMembers.map((name, index) => (
                <div style={{ display: "inline-block" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i1.wp.com/media.premiumtimesng.com/wp-content/files/2020/04/Tom-and-Jerry-e1587475883217.jpg?resize=800%2C570&ssl=1"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
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