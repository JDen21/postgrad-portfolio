
import React from "react";
import ams from '../../resources/ams.png'
import csu from '../../resources/csu.png'
import WS from '../css/WorkSection.module.css'

export default function WorkSection(){


    return (
        <section className={WS.deck} >
            <div className={WS.card} >
                <img className={WS.amsImage} src={ams} alt='ams here' />
            </div>
            <div className={`${WS.card} ${WS.cardRed}`} >
                <img className={WS.csuImage} src={csu} alt='csu logo' />
               <div>CSU Canteen Ordering System</div> 
            </div>
        </section>
    )
}