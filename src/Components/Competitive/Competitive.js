import learning from "../../assets/learning.jpg"
import "./Competitive.css"
const Competitive=()=>{
    return(
        <div className="competitive-main">
            <h1 className="competitive-header">Competitive Learning System</h1>
            <p className="competitive-p">Step-by-step Process to get you moving towards your goal</p>
            <p className="comp-link">Learn Now <span className="arrow"> &#8594;</span></p>
            <img src={learning} alt="learn" className="comp-img"/>
        </div>
    )
}

export default Competitive