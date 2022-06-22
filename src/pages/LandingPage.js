import CustomNav from '../components/js/CustomNav.Section'
import React from 'react'
import HeroSection from '../components/js/LandingHero.Section'

const AboutSection = React.lazy(()=>import('../components/js/LandingAbout.Section.js'))
const WorkSection = React.lazy(()=> import('../components/js/LandingWorks.Section'))
const FooterSection = React.lazy(()=> import('../components/js/Footer.Section'))
const AboutMeSection = React.lazy(()=> import('../components/js/LandingAboutMe.Section'))

export default function LandingPage(){

    return(
            <div>
                <CustomNav />
                <HeroSection />
                <AboutSection />
                <AboutMeSection />
                <WorkSection />
                <FooterSection />
            </div>   
    )
}   