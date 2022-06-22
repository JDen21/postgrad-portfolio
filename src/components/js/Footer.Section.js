import React from "react";
import FS from '../css/FooterSection.module.css'
import google from '../../resources/google.svg'
import fb from '../../resources/fb.svg'
import ln from '../../resources/linkedin.svg'
import git from '../../resources/git.svg'
import resume from '../../resources/resume.svg'

export default function FooterSection(){


    return(
        <section className={FS.parent} >
            <div> Contact Me </div>
            <div>
                <img src={google} alt='google' />
                <img className={FS.extraPad} src={fb} alt='fb' />
                <img src={ln} alt='linkedin' />
            </div>
            <div>Checkout My Codes</div>
            <div>
                <img src={git} alt='git' />
            </div>
            <div>Resume</div>
            <div>
                <img src={resume} alt='resume' />
            </div>
            <div>Updated</div>
            <div className={FS.thumbnail} >
                06-19-2022
            </div>
        </section>
    )
}