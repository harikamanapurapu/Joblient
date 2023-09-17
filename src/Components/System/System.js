import system from "../../assets/second.jpg"
import "./Syatem.css"

const System=()=>{
    return(
        <div className="system-main" flex>
            <div column className="system-first">
                <h1 className="system-header">Integrated System</h1>
                <p className="system-p">This system provides users with a one-stop shop for all their job search needs, including resources for preparing for interviews, creating resumes, and applying for jobs .</p>
                <p className="system-p">It also provides a platform for recruiters and interviewers to post jobs, review resumes, and conduct interviews with potential candidates.</p>
                <p className="system-p">It is designed to help job seekers quickly find the perfect job opportunity and make the most of any interview .</p>
                <div flex className="cards">
                    <div column className="cards-1">
                        <div flex className="cards-2">
                            <div className="round">1</div>
                            <div className="rectangle">Intern</div>
                        </div>
                        <div className="cards-2">
                            <div className="round">2</div>
                            <div className="rectangle">Freshers</div>
                        </div>
                        <div className="cards-2">
                            <div className="round">3</div>
                            <div className="rectangle" >Job search</div>
                        </div>
                        <div className="cards-2">
                            <div className="round">4</div>
                            <div className="rectangle">Experience</div>
                        </div>
                    </div>
                    <div column className="cards-1">
                        <div flex className="cards-2">
                            <div className="round">5</div>
                            <div className="rectangle">Recruiter</div>
                        </div>
                        <div className="cards-2">
                            <div className="round">6</div>
                            <div className="rectangle">Interviewer</div>
                        </div>
                        <div className="cards-2">
                            <div className="round">7</div>
                            <div className="rectangle">Learn prepare Challenge</div>
                        </div>
                    </div>
                    <button className="system-btn">Get Started</button>
                </div>
            </div>
            <img src={system} alt="second" className="system-age"/>
        </div>
    )
}

export default System