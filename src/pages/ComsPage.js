import React, {lazy} from "react"
import CustomNav from '../components/js/CustomNav.Section'
import ComsHero from '../components/js/ComsHero.Section'

const FooterSection = lazy(()=> import('../components/js/Footer.Section'))
const ComsDescription = lazy(()=> import('../components/js/ComsDescription.Section'))
const ComsConcept = lazy(()=> import('../components/js/ComsConcept.Section'))

export default function ComsPage(){


    return (
        <>
        <CustomNav />
        <ComsHero /> 
        <ComsDescription />
        <ComsConcept />
        <FooterSection />
        </>
    )
}