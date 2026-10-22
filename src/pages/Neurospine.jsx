import React from 'react'
import NeurospineHero from '../components/services/neurospine/NeurospineHero'
import NeurospineKeyAreas from '../components/services/neurospine/NeurospineKeyAreas'
import NeurospineWhenToConsult from '../components/services/neurospine/NeurospineWhenToConsult'
import NeurospineFinalCTA from '../components/services/neurospine/NeurospineHospitalSupport'

const Neurospine = () => {
  return (
    <div>
      <NeurospineHero/>
      <NeurospineKeyAreas/>
      <NeurospineWhenToConsult/>
      <NeurospineFinalCTA/>
    </div>
  )
}

export default Neurospine
