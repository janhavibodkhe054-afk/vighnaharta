import React from 'react'
import OrthopedicsHero from '../components/services/orthopedics/OrthopedicsHero'
import OrthopedicKeyAreas from '../components/services/orthopedics/OrthopedicKeyAreas'
import RelatedTreatments from '../components/services/orthopedics/RelatedTreatments'
import WhenToSeekOrthopedicConsultation from '../components/services/orthopedics/WhenToSeekOrthopedicConsultation'

const Orthopedics = () => {
  return (
    <div>
      <OrthopedicsHero/>
      <OrthopedicKeyAreas/>
      <RelatedTreatments/>
      <WhenToSeekOrthopedicConsultation/>
    </div>
  )
}

export default Orthopedics
