import "./Advance.css"
import advance from "../../assets/last.jpeg"
const Advance=()=>{
    return(
        <div className="advance-main">
            <div className="advance">
                <h1 className="advance-header">Advanced System Design</h1>
                <p className="advance-p">This course is designed to help you develop a strong foundation in design principles and practices, allowing you to create designs with clarity and purpose. You will learn to analyze and solve design problems, create effective system and workflows, and be able to communicate your design decisions to stakeholders.</p>
                <div className="advance-divs">
                    <ul className="list">
                        <li className="list-item">Learn Design Concepts</li>
                        <li className="list-item">Inbuilt Design Editor</li>
                        <li className="list-item">Create Design</li>
                        <li className="list-item">Practice Existing Designs</li>
                        <li className="list-item">Take Design Test</li>
                        <li className="list-item">Solve Open Design Problems</li>
                    </ul>
                    <button className="advance-btn">Get started</button>
                </div>
            </div>
            <img src={advance} alt="learn" className="advance-image"/>
        </div>
    )
}

export default Advance