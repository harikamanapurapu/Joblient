import smart from "../../assets/third.jpg"
import "./Smart.css"

const Smart =()=>{
    return(
        <div className="main-smart">
            <img src={smart} alt="" className="smart-image"/>
            <div className="smart">
                <h1 className="smart-header">Smart Hiring</h1>
                <p className="smart-p"><span className="smart-arrow"> &#8594;</span>A Smart Hiring System uses algorithms to assess job applicants and predict their potential for success in the role .</p>
                <p className="smart-p"><span className="smart-arrow"> &#8594;</span>It looks at factors such as previous experience, qualifications, skills, and performance in interviews to make an informed decision on who to hire .</p>
                <p className="smart-p"><span className="smart-arrow"> &#8594;</span>It is designed to save time and money by streamlining the recruitment process, giving employers access to a larger pool of potential applicants.</p>
                <button className="smart-btn">Get started</button>
            </div>
        </div>
    )
}

export default Smart