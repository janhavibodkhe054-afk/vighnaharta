import React from 'react'
import PreventiveCardiologyHero from '../components/services/preventive-cardiac/PreventiveCardiologyHero'
import PreventiveCardiologyKeyAreas from '../components/services/preventive-cardiac/PreventiveCardiologyKeyAreas'
import PreventiveCardiologyRiskProcess from '../components/services/preventive-cardiac/PreventiveCardiologyRiskProcess'
import PreventiveCardiologyWhoShouldConsult from '../components/services/preventive-cardiac/PreventiveCardiologyWhoShouldConsult'

const PreventiveCardiology = () => {
  return (
    <div>
      <PreventiveCardiologyHero/>
      <PreventiveCardiologyKeyAreas/>
      <PreventiveCardiologyRiskProcess/>
      <PreventiveCardiologyWhoShouldConsult/>
    </div>
  )
}

export default PreventiveCardiology
