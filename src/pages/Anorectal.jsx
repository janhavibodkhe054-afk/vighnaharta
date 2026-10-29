import React from 'react'
import AnorectalHero from '../components/services/anorectal/AnorectalHero'
import AnorectalConditions from '../components/services/anorectal/AnorectalConditions'
import AnorectalTreatment from '../components/services/anorectal/AnorectalTreatment'
import AnorectalCTA from '../components/services/anorectal/AnorectalCTA'

const Anorectal = () => {
  return (
    <div>
      <AnorectalHero/>
      <AnorectalConditions/>
      <AnorectalTreatment/>
      <AnorectalCTA/>
    </div>
  )
}

export default Anorectal
