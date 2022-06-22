import React, { lazy } from "react";
import CustomNav from '../components/js/CustomNav.Section'

const PamsHero = lazy(()=> import('../components/js/PamsHero.Section'))
const PamsDescription = lazy(()=> import('../components/js/PamsDescription.Section'))
const PamsKeyPoints = lazy(()=> import('../components/js/PamsKeyPoints.Section'))
const FooterSection = lazy(()=> import('../components/js/Footer.Section'))

export default function PamsPage(){


    return(
        <div>
            <CustomNav />
            <PamsHero />
            <PamsDescription />
            <PamsKeyPoints />
            <FooterSection />
        </div>
    )
}