import React from 'react'
import OncologyHero from '../components/services/oncology/OncologyHero'
import OncologyKeyAreas from '../components/services/oncology/OncologyKeyAreas'
import OncologyCareApproach from '../components/services/oncology/OncologyCareApproach'
import OncologyWhenToConsult from '../components/services/oncology/OncologyWhenToConsult'

const Oncology = () => {
  return (
    <div>
      <OncologyHero/>
      <OncologyKeyAreas/>
      <OncologyCareApproach/>
      <OncologyWhenToConsult/>
    </div>
  )
}

export default Oncology
