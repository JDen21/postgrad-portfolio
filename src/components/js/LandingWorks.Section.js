import React from "react";
import ams from '../../resources/ams.png'
import csu from '../../resources/csu.png'
import WS from '../css/WorkSection.module.css'
import {useNavigate} from 'react-router-dom'

export default function WorkSection() {
    
    const navigate = useNavigate()
    const pushToAMS = ()=>{
        navigate('/pams')
    }

    return (
        <section>
            <div className={WS.sectionTitle} >My Works</div>
            <section className={WS.deck}>
                <div className={WS.card} onClick={pushToAMS} >
                    <img className={WS.amsImage} src={ams} alt='ams here'/>
                </div>
                <div className={`${WS.card} ${WS.cardRed}`}>
                    <img className={WS.csuImage} src={csu} alt='csu logo'/>
                    <div>CSU Canteen Ordering System</div>
                </div>
            </section>
        </section>

    )
}