import React from "react";
import HS from '../css/HeroSection.module.css'
import me from '../../resources/me.png'

const WhiteBox = React.lazy(()=>import( "./WhiteBox"))
export default function HeroSection(){


    return (
        <section className={HS.parent} >
            <div  >
                <div className={HS.colOne}>
                    <img src={me} alt="my hero" className={HS.me} />
                </div>    
            </div>
            <div className={HS.colTwo} >
                <div className={HS.animateOne} >
                    <WhiteBox value="Web" solid={false} />
                </div>
                <div className={HS.animateTwo} >
                    <WhiteBox value="Software" solid={false} />
                </div>
                <div className={HS.animateThree} >
                    <WhiteBox value="Developer" solid={true} />
                </div>  
            </div>
        </section>
    )
}