import React from 'react'
import CardiacDiagnosticHero from '../components/services/cardiacdiagnostic/CardiacDiagnosticHero'
import CardiacDiagnosticInvestigations from '../components/services/cardiacdiagnostic/CardiacDiagnosticInvestigations'
import CardiacDiagnosticProcess from '../components/services/cardiacdiagnostic/CardiacDiagnosticProcess'
import CardiacTestingWhenRecommended from '../components/services/cardiacdiagnostic/CardiacTestingWhenRecommended'

const CardiacDiagnostic = () => {
  return (
    <div>
      <CardiacDiagnosticHero/>
      <CardiacDiagnosticInvestigations/>
      <CardiacDiagnosticProcess/>
      <CardiacTestingWhenRecommended/>
    </div>
  )
}

export default CardiacDiagnostic
