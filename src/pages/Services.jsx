import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import DepartmentsSection from '../components/services/DepartmentsSection'
import TreatmentsProcedures from '../components/services/TreatmentsProcedures'

import EmergencyServices from '../components/services/EmergencyServices.jsx'


const Services = () => {
  return (
    <div>
      <ServicesHero/>
      <DepartmentsSection/>
      <TreatmentsProcedures/>
      
      <EmergencyServices/>
      
    </div>
  )
}

export default Services
