import React from 'react'
import EecpHero from '../components/services/eecp/EecpHero'
import EecpOverview from '../components/services/eecp/EecpOverview'
import EecpEligibility from '../components/services/eecp/EecpEligibility'

const Eecp = () => {
  return (
    <div>
      <EecpHero/>
      <EecpOverview/>
      <EecpEligibility/>
    </div>
  )
}

export default Eecp
