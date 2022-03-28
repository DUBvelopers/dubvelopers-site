import React from "react";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <p>Connect with us <span style={{color: "red"}}>&#10084;</span></p>
            <div className="socials">
                <a href="https://github.com/DUBvelopers-UW" target="_blank" rel="noreferrer" ><FaGithub/></a>
                <a href="https://discord.gg/FNgd38xhtf" target="_blank" rel="noreferrer" ><FaDiscord/></a>
                <a href="https://www.instagram.com/dubvelopers_uw/" target="_blank" rel="noreferrer" ><FaInstagram/></a>
            </div>
            <br/>
            <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noreferrer" title="learn icons">
                Vector icons created by Freepik - Flaticon
            </a>
        </section>
    );
}

export default Footer;