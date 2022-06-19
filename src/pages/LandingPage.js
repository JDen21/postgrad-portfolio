import CustomNav from '../components/js/CustomNav'
import React from 'react'
import HeroSection from '../components/js/HeroSection'

const AboutSection = React.lazy(()=>import('../components/js/AboutSection'))
const WorkSection = React.lazy(()=> import('../components/js/WorksSection'))
const FooterSection = React.lazy(()=> import('../components/js/FooterSection'))

export default function LandingPage(){

    return(
            <div>
                <CustomNav />
                <HeroSection />
                <AboutSection />
                <WorkSection />
                <FooterSection />
            </div>   
    )
}   