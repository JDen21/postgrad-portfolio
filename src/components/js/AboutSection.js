import React from "react";
import AS from '../css/AboutSection.module.css'


export default function AboutSection() {

    // install react-reveal for reveal on scroll 

    return(
        <div className={AS.mainDiv} >
            <div className={`${AS.balloons} ${AS.js} `} >JS</div>
            <div className={`${AS.balloons} ${AS.ts}`} >TS</div>
            <div className={`${AS.balloons} ${AS.jv}`} >JV</div>
            <div className={AS.subDiv} >
                I build <span className={AS.setColor} >website</span> and <span className={AS.setColor} >software</span> for startup <span className={AS.setColor} >businesses</span>
            </div>
        </div>
    )
}