import React from "react"
import "./Footer.css"

const Footer=()=>{
    return(
        <div className="footer-main"> 
            <div className="footer-cards">
                <div className="footer-cons">
                    <p className="number">1000+</p>
                    <p className="text">Learning Content</p>
                </div>
                <p className="dots">...</p>
            </div>
            <div className="footer-cards">
                <div className="footer-cons">
                    <p className="number">2000+</p>
                    <p className="text">Test Content</p>
                </div>
                <p className="dots">...</p>
            </div>
            <div className="footer-cards">
                <div className="footer-cons">
                    <p className="number">100000+</p>
                    <p className="text">Jobs</p>
                </div>
                <p className="dots">...</p>
            </div>
            <div className="footer-cards">
                <div className="footer-cons">
                    <p className="number">10000+</p>
                    <p className="text">Candidates</p>
                </div>
                <p className="dots">...</p>
            </div>
        </div>
    )
}
export default Footer