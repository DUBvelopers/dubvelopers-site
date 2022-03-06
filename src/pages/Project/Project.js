import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useGoogleSheets from 'use-google-sheets';

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
    <div style={{ textAlign: "center" }}>
        <h1>Projects</h1>
        {projectData.map((value, index) => (
            <div style={{ display: "inline-block" }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={value["Picture URL"]}
                            alt={value["Project Name"]}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <a href={value["Project URL"]}>{value["Project Name"]}</a>
                            </Typography>
                            
                            <Typography variant="body2" color="text.secondary">
                                    {value["Leads"]}
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
};

export default Project