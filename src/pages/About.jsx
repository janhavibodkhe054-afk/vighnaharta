import React from 'react'
import AboutHero from '../components/about/AboutHero'
import WhoWeAre from '../components/about/WhoWeAre'
import MissionVision from '../components/about/MissionVision'
import OurValues from '../components/about/OurValues'
import LeadershipSection from '../components/about/LeadershipSection'
import HospitalGallery from '../components/about/HospitalGallery'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <WhoWeAre/>
      <MissionVision/>
      
      <LeadershipSection/>
      <OurValues/>
    </div>
  )
}

export default About
