import React from 'react'
import DermatologyHero from '../components/services/dermatology/DermatologyHero'
import DermatologyKeyAreas from '../components/services/dermatology/DermatologyKeyAreas'
import DermatologyWhenToConsult from '../components/services/dermatology/DermatologyWhenToConsult'

const Dermatology = () => {
  return (
    <div>
      <DermatologyHero/>
      <DermatologyKeyAreas/>
      <DermatologyWhenToConsult/>
    </div>
  )
}

export default Dermatology
