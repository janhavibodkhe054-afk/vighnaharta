import React from 'react'
import GynecologyHero from '../components/services/gynecology/GynecologyHero'
import GynecologyDepartmentCare from '../components/services/gynecology/GynecologyDepartmentCare'
import GynecologicalProcedures from '../components/services/gynecology/GynecologicalProcedures'

const Gynecologist = () => {
  return (
    <div>
      <GynecologyHero/>
      <GynecologyDepartmentCare/>
      <GynecologicalProcedures/>
    </div>
  )
}

export default Gynecologist
