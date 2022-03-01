import React, { useEffect, useState, Fragment } from "react";
import {gapi} from 'gapi-script';
import Tabletop from "tabletop";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const {google} = require('googleapis');
const sheets = google.sheets('v4');

async function main() {
    const request = {
        spreadsheetId: "1BIfNQrDDB8KoFS69zufx87iKU3C7hONpQXc5LDyZy1s",
        range: "A:B"
    };
    try {
        const response = await sheets.spreadsheets.values.get(request); 
        const data = response.data;
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
main();
    
export default Project;