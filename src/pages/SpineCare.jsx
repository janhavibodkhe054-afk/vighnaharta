import React from 'react'
import SpineCareHero from '../components/services/spinecare/SpineCareHero'
import SpineKeyAreas from '../components/services/spinecare/SpineKeyAreas'
import SpineTraumaCare from '../components/services/spinecare/SpineTraumaCare'
import SpineWhenToConsult from '../components/services/spinecare/SpineWhenToConsult'

const SpineCare = () => {
  return (
    <div>
      <SpineCareHero/>
      <SpineKeyAreas/>
      <SpineTraumaCare/>
      <SpineWhenToConsult/>
    </div>
  )
}

export default SpineCare
