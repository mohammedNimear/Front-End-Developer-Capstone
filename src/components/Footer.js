import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
    return (
        <div>
            <div className="footer-background">
                <div className="footer-container">
                    <img src={ Logo } alt="Little Lemon logo" />
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                    <div className="footer-content">
                        <div className="locations">
                            <h5>LOCATIONS</h5>
                            <ul>
                                <li>Umdorman</li>
                                <li>Bahry</li>
                                <li>Khartoum</li>
                            </ul>
                        </div>
                        <div className="opening-times">
                            <h5>Reserve Now</h5>
                            <ul>
                                <li>phone: 01234567890</li>
                                <li>whatsapp: 0121212121</li>
                                <li>email: littlelemon@example.com</li>

                            </ul>
                        </div>
                        <div className="opening-times">
                            <h5>Service Times</h5>
                            <ul>
                                <li>sat - thu: 10:30AM - 12:00AM</li>
                                <li>Fri: 12:00PM - 1:00AM</li>
                            </ul>
                        </div>
                </div>
                <div className="copyright">
                    <p>© 2023 Little Lemon copyright reserved.</p>
                </div>
            </div>
            </div>
        </div>
      )
}

export default Footer
