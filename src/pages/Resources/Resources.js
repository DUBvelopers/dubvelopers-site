import React, { useState } from "react";
import Footer from "../Footer/Footer";

import codingResources from "./codingResources";
import designResources from "./designResources";
import Resource from "./Resource";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Resources.css";

const Resources = () => {
    const [showCoding, setShowCoding] = useState(false);
    const [showDesign, setShowDesign] = useState(false);

    return (
        <>
            <section id="resources">
                <div id="coding">
                    <div className="title">
                        <h3>Coding Resources</h3>
                        <div className="arrow" onClick={() => setShowCoding(!showCoding)}>
                            {showCoding ? <FiChevronUp size={30}/> : <FiChevronDown size={30}/>}
                        </div>
                    </div>
                    {showCoding && <div className="sources">
                        {codingResources.map(r => <Resource resource={r}/>)}
                    </div>}
                </div>
                
                <div id="design">
                    <div className="title">
                        <h3>Design Resources</h3>
                        <div className="arrow" onClick={() => setShowDesign(!showDesign)}>
                            {showDesign ? <FiChevronUp size={30}/> : <FiChevronDown size={30}/>}
                        </div>
                    </div>
                    {showDesign && <div className="sources">
                        {designResources.map(r => <Resource resource={r}/>)}
                    </div>} 
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Resources;