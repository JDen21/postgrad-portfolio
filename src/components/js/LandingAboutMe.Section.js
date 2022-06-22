import React from "react";
import AM from '../css/AboutMe.module.css'

export default function LandingAboutMe(){


    return (
        <section className={AM.body} >
            <div className={AM.sectionTitle} >
                About Me
            </div>
            <div className={AM.content} >
                Hi! My name is Den. I have this strong passion in programming and
                development. I have been in competitive programming '1st in the ICPEP Nationals'
                and I have created apps that can work in the browser.
            </div>
        </section>
    )
}