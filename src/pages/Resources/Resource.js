import React from "react";

import "./Resources.css";

const Resource = props => {
    return (
        <div className="resource">
            <div className="text">
                <h4>{props.resource.season} Week {props.resource.week} - {props.resource.title}</h4>
                <p>{props.resource.date}</p>
            </div>

            <a href={props.resource.link} target="_blank" rel="noreferrer">
                <button>View</button>
            </a>
        </div>
    );
}

export default Resource;