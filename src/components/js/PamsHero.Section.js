import React from "react";
import ph from '../css/PamsHero.module.css'
import phone from '../../resources/mobile_safe.svg'

export default function PamsHero() {

    return (
        <section className={ph.parentStyle}>
            <div className={ph.mainChild} >
                <div className={ph.subChild}>
                <div className={ph.test} >

                </div>
                <img src={phone} alt='animated phone' className={ph.mobile} />
                    <div className={`${ph.styleBox} ${ph.blackBox} `}></div>

                    <div className={`${ph.styleBox} ${ph.purpleBox} `}></div>
                    
                    <div className={ph.goldBox}>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}