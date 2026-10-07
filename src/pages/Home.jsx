import React from 'react'
import HeroSection from '../components/home/HeroSection'
import EmergencySection from '../components/home/EmergencySection'
import AboutPreview from '../components/home/AboutPreview'
import SpecialitiesSection from '../components/home/SpecialitiesSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import FacilitiesSection from '../components/home/FacilitiesSection'
import DoctorsPreview from '../components/home/DoctorsPreview'
import TreatmentsSection from '../components/home/TreatmentsSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <EmergencySection/>
      <AboutPreview/>
      <SpecialitiesSection/>
      <WhyChooseUs/>
      <FacilitiesSection/>
      <DoctorsPreview/>
      <TreatmentsSection/>
    </div>
  )
}

export default Home
