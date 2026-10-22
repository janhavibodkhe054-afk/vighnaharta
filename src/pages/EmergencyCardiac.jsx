import React from 'react'
import EmergencyCardiacHero from '../components/services/emergency-cardiac/EmergencyCardiacHero'
import EmergencyCardiacWarningSigns from '../components/services/emergency-cardiac/EmergencyCardiacWarningSigns'
import EmergencyCardiacEvaluation from '../components/services/emergency-cardiac/EmergencyCardiacEvaluation'

const EmergencyCardiac = () => {
  return (
    <div>
      <EmergencyCardiacHero/>
      <EmergencyCardiacWarningSigns/>
      <EmergencyCardiacEvaluation/>
    </div>
  )
}

export default EmergencyCardiac
