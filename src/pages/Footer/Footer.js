import React from "react";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <p>Connect with us <span style={{color: "red"}}>&#10084;</span></p>
            <div className="socials">
                <a href="https://github.com/DUBvelopers-UW"><FaGithub/></a>
                <a href="https://discord.gg/FNgd38xhtf"><FaDiscord/></a>
                <a href="https://www.instagram.com/dubvelopers_uw/"><FaInstagram/></a>
            </div>
        </section>
    );
}

export default Footer;