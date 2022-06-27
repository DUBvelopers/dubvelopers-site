import React from "react";

import "./Resources.css";

const getDate = date => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return month + " " + day + ", " + year;
}

const Resource = props => {
    return (
        <div className="resource">
            <div className="text">
                <h4>{props.resource.season} Week {props.resource.week} - {props.resource.title}</h4>
                <p>{getDate(props.resource.date)}</p>
            </div>

            <div className="buttons">
                {props.resource.slidesLink && <a href={props.resource.slidesLink} target="_blank" rel="noreferrer">
                    <button>Slides</button>
                </a>}
                {props.resource.videoLink && <a href={props.resource.videoLink} target="_blank" rel="noreferrer">
                    <button>Video</button>
                </a>}
            </div>
        </div>
    );
}

export default Resource;