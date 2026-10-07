import React from 'react'
import TreatmentsHero from '../components/services/treatment-procedure/TreatmentsHero'
import TreatmentNavigator from '../components/services/treatment-procedure/TreatmentNavigator'
import TreatmentPlanning from '../components/services/treatment-procedure/TreatmentPlanning'

const Tratment = () => {
  return (
    <div>
      <TreatmentsHero/>
      <TreatmentNavigator/>
      <TreatmentPlanning/>
    </div>
  )
}

export default Tratment
