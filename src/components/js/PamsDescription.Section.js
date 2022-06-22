import React from "react";
import PD from '../css/PamsDescription.module.css'
import amd from '../../resources/amd_dummy.svg'
import ams from '../../resources/ams.png'

export default function PamsDescription() {

    return (
        <section>
            <div className={PD.sectionTitle}>
                Personal Accident Monitoring System
            </div>
            <section className={PD.parent}>
                <div className={PD.sectionContent} >
                    <div className={PD.messageBox} >
                        <div className={PD.contentTitle} >
                            About
                        </div>
                        <div>
                            PAMS is a system solution to accidents designed to work in Carig Tuguegarao. The
                            aim is to be a working system that can detect accidents and notify responders
                            through the software. 
                        </div>
                    </div>

                    <img src={amd} className={PD.imageStyles} alt='device amd'/>
                    <img src={ams} className={PD.imageStyles} alt='ams dummy'/>

                    <div className={PD.messageBox} >
                        <div className={PD.contentTitle} >
                            The Concept
                        </div>
                        <div>
                            PAMS is a thesis project that combines software and hardware in a single system.
                            It is capable of detecting accidents by watching for abrupt changes in pulse and
                            surrounding vibrations of the user. PAMS software is capable of receiving data
                            from the device and is required to make the device work. It can customize the
                            behaviour of the device and has built in system for notification of responders
                            whenever accidents happen
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}