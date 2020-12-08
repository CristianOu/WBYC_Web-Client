import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import './footer.styles.scss'
import { Link } from "react-router-dom";


const Footer = () => (
        <div className="social-media-block"><div className="follow-us">Follow us!</div>
            <br/>
            <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank">
                <FontAwesomeIcon icon={faFacebook} size={"2x"} className="icon"/>
            </Link>

            <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">
                <FontAwesomeIcon icon={faInstagram} size={"2x"} className="icon"/>
            </Link>

            <Link to={{ pathname: "https://twitter.com/" }} target="_blank">
                <FontAwesomeIcon icon={faTwitter} size={"2x"} className="icon"/>
            </Link>

            <Link to={{ pathname: "https://www.youtube.com/" }} target="_blank">
                <FontAwesomeIcon icon={faYoutube} size={"2x"} className="icon"/>
            </Link>

        </div>
    )

export default Footer;
