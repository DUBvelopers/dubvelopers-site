import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <p>Connect with us <span style={{color: "red"}}>&#10084;</span></p>
            <div className="socials">
                <a href="https://www.instagram.com/dubvelopers_uw/"><FaLinkedinIn/></a>
                <a href="https://www.instagram.com/dubvelopers_uw/"><FaTwitter/></a>
                <a href="https://www.instagram.com/dubvelopers_uw/"><FaFacebookF/></a>
                <a href="https://www.instagram.com/dubvelopers_uw/"><FaInstagram/></a>
            </div>
        </section>
    );
}

export default Footer;