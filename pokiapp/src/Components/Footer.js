import React from "react"
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/Employer">
                            <p>Employer</p>
                        </a>
                        <a href="/Individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/ResourceCenter">
                            <p>Resource Center</p>
                        </a> 
                            <a href="/Testimonials">
                            <p>Testimonials</p>
                        </a> 
                        </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>   
                            <a href="/About">
                            <p>About</p>
                        </a>
                            <a href="/Contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <hr></hr>
                    <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Rekkr Industries. All rights reserved.
                        </p>
                    </div>
                    <div className="belowLinks">
                        <a href="/Terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/Privacy"><div><p>Privacy</p></div></a>
                        <a href="/Security"><div><p>Security</p></div></a>
                        <a href="/Cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Footer