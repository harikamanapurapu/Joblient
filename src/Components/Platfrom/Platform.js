import "./Platform.css"
import platform from "../../assets/first.png"
const Platform =()=>{
    return(
        <div className="main-plat">
            <h1 className="plat-header"> Platform For All - Candidate, Recruiters, Interviewers</h1>
            <div className="features">
                <div className="feature-1">
                    <p className="feature-p">The most reliable platform for recruiter to get technically pre-assessed, immediate joiners, within budget.</p>
                    <p className="feature-p">By upskilling, a candidate becomes eligible to be included on pre-assessed category and increases their chances of being selected for the role.</p>
                </div>
                <img src={platform} alt="platform" className="plat-img"/>
            </div>
            <button className="plat-button">Get started Now</button>
        </div>
    )
}

export default Platform