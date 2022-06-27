import React from 'react'
import CD from '../css/ComsDescription.module.css'

export default function ComsDescription() {

    return (
        <section className={CD.parent} >
            <div className={CD.title} >
                COMS
            </div>
            <div className={CD.body} >
                COMS is a food ordering system aiming to be used in CSU Carig Tuguegarao. The
                goal is to reduce time in lining up for food in canteen. It aims to eventually
                be available for mobiles completely removing the need for lining up.
            </div>
        </section>
    )
}