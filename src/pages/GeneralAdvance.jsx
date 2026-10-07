import React from 'react'
import GeneralSurgeryHero from '../components/services/general-advance/GeneralSurgeryHero'
import SurgeryKeyAreas from '../components/services/general-advance/SurgeryKeyAreas'
import FeaturedSurgicalTreatments from '../components/services/general-advance/FeaturedSurgicalTreatments'
import SurgicalCareJourney from '../components/services/general-advance/SurgicalCareJourney'

const GeneralAdvance = () => {
  return (
    <div>
      <GeneralSurgeryHero/>
      <SurgeryKeyAreas/>
      <FeaturedSurgicalTreatments/>
      <SurgicalCareJourney/>
    </div>
  )
}

export default GeneralAdvance
