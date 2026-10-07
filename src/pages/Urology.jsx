import React from 'react'
import UrologyHero from '../components/services/urology/UrologyHero'
import UrologyKeyAreas from '../components/services/urology/UrologyKeyAreas'
import UrologyTreatments from '../components/services/urology/UrologyTreatments'
import UrologyWhenToConsult from '../components/services/urology/UrologyWhenToConsult'

const Urology = () => {
  return (
    <div>
      <UrologyHero/>
      <UrologyKeyAreas/>
      {/* <UrologyTreatments/> */}
      <UrologyWhenToConsult/>
    </div>
  )
}

export default Urology
