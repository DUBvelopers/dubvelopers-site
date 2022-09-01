import React, { useState } from "react";
import useGoogleSheets from 'use-google-sheets';
import { FaCrown } from "react-icons/fa";

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

    return (
        <div>
            <h1>{projectData[parseInt(url.split("/")[4])]["Project Name"]}</h1>
            <h3>Members</h3>
            <h5>Coding</h5>
            <ul>
                {projectData[parseInt(url.split("/")[4])]["Coding Leads"].split(", ").map((val, i) => (
                    <li className="listStudents">{val} <FaCrown /></li>
                ))}

                {projectData[parseInt(url.split("/")[4])]["Coding Members"].split(", ").map((val, i) => (
                    <li className="listStudents">{val}</li>
                ))}
            </ul>
            <h5>Design</h5>
            <ul>
                {projectData[parseInt(url.split("/")[4])]["Design Leads"].split(", ").map((val, i) => (
                    <li className="listStudents">{val} <FaCrown /></li>
                ))}

                {projectData[parseInt(url.split("/")[4])]["Design Members"].split(", ").map((val, i) => (
                    <li className="listStudents">{val}</li>
                ))}
            </ul>
            <a href={projectData[parseInt(url.split("/")[4])]["Project URL"]}>View Project</a>
            <p>Description: {projectData[parseInt(url.split("/")[4])]["Description"]}</p>
            <p>TagLine: {projectData[parseInt(url.split("/")[4])]["Tagline"]}</p>
        </div>
    )
}

export default IndProject;