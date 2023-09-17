
import "./Interview.css"
import int from "../../assets/interviews.jpg"

const Interview=()=>{
    return(
        <div className="interview-main">
            <h1 className="interview-header">Interview Platform</h1>
            <p className="interview-p">Create Interview questions</p>
            <p className="interview-p">Create and Share the Interviews</p>
            <p className="interview-p">Record the Interview & score</p>
            <p className="interview-link">Get started <span className="int-arrow">&#8594;</span></p>
            <img src={int} alt="learn" className="int"/>
        </div>
    )
}

export default Interview