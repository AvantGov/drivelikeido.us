// depends 
import React from "react";


// css
import "../CSS/About.css";


const About = () => {

    return(
        <div className="About" id="About">
            <div className="About__leadeContainer">
                <h2 className="leadeContainer__title">About</h2>
                <p className="leadeContainer__copy">Tucked away in downtown Madison, Drive Like I Do is a post-hardcore outfit brewing home made wisconsin guitar music for the eager and angry. The band waste no time in delivering pummeling riffs, catchy hooks, and lyrical quips that explore the brighter and darker parts of the human condition.</p>
                <p className="leadeContainer__copy">FFO: SPICE, Drug Church, Hum, Cherubs</p>
                <p className="leadeContainer__copy">Hear debut release "Apollo of Dogs" at the links above. Reach out at the email below for booking and press inquiries.</p>
            </div>
            <div className="About__pressContainer">
                <img className="pressContainer__img" src="bandphoto.jpg" />
                <div className="pressContainer__bulletContainer">
                    <ul className="bulletContainer__list">
                        <li className="list__listItem">
                            <a className="listItem__link" href="https://drive.google.com/drive/folders/1OO_k78lueedjqGIaGBAV8GN0F4fY-_4W?usp=drive_link" target="_blank" rel="noopenner noreferrer">Electronic Press Kit (EPK)</a>
                        </li>

                        <li className="list__listItem">
                            <a className="listItem__link" href="mailto:dlidhq@gmail.com" target="_blank" rel="noopenner noreferrer">dlidhq@gmail.com</a>
                        </li>
{/* 
                        <li className="list__listItem">
                            <a className="listItem__link" href="https://donate.wikimedia.org/wiki/Ways_to_Give" target="_blank" rel="noopenner noreferrer">donate to wikimedia foundation</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default About;