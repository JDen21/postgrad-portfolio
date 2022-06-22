import React from "react";
import CardComponent from "./CardComponent";
import ams from '../../resources/ams.svg'
import amd from '../../resources/amd.svg'
import ambulance from '../../resources/ambulance.svg'
import map from '../../resources/maps.svg'
import PKP from '../css/PamsKeyPoints.module.css'

export default function PamsKeyPoints(){


    return(
        <section>
            <div className={PKP.title} >
                Keypoints of The System
            </div>
            <div className={PKP.body} >
                <CardComponent 
                cardImage={
                    <img src={ams} alt='ams svg' />
                } 
                cardTitle='AMS'
                content='The software application of the system. It offers notification system capable of configuring AMD behaviour'
                solid= {false}
                 />
                <CardComponent
                cardImage={
                    <img src={amd} alt='amd svg' />
                }
                cardTitle='AMD'
                content='The hardware device of the system. It watches for accidents that could occur to the user'
                solid={true}
                 />
                <CardComponent
                cardImage={
                    <img src={ambulance} alt='ambulance' />
                }
                cardTitle='Benefactors'
                content='The responders or any people that get notified by the device when accident occurs to their user.'
                solid={false} 
                 />

                 <CardComponent 
                cardImage={
                    <img src={map} alt='user map' />
                }
                cardTitle='Users'
                content='People that uses the device and is being watched by the user.'
                solid={true}
                 />
            </div>
        </section>
    )
}