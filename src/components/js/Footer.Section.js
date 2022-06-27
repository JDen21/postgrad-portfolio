import React from "react";
import FS from '../css/FooterSection.module.css'
import google from '../../resources/google.svg'
import fb from '../../resources/fb.svg'
import ln from '../../resources/linkedin.svg'
import git from '../../resources/git.svg'
import resume from '../../resources/resume.svg'
import pdf from '../../pages/Resume.pdf'

export default function FooterSection(){

   const checkMyGit = ()=> {
        window.location = 'https://github.com/JDen21'
   }

   const checkFb = ()=> {
        window.location = 'https://www.facebook.com/den.garcia.50767/'
   }

   const checkLinkedin = () => {
        window.location = 'https://www.linkedin.com/in/den-jhosua-garcia-047395215/'
   }

    return(
        <section className={FS.parent} >
            <div> Contact Me </div>
            <div>
                <img src={google} alt='google' />
                <img className={FS.extraPad} onClick={checkFb} src={fb} alt='fb' />
                <img src={ln} onClick={checkLinkedin} alt='linkedin' />
            </div>
            <div>Contribute to My Works</div>
            <div>
                <img src={git} onClick={checkMyGit} alt='git' />
            </div>
            <div>Resume</div>
            <div>
                <a href={pdf} >
                    <img src={resume}  alt='resume' />
                </a>
            </div>
            <div>Updated</div>
            <div className={FS.thumbnail} >
                06-19-2022
            </div>
        </section>
    )
}