import React from 'react'
import GeneralMedicineHero from '../components/services/general-medicine/GeneralMedicineHero'
import MedicineKeyAreas from '../components/services/general-medicine/MedicineKeyAreas'
import AcuteChronicCare from '../components/services/general-medicine/AcuteChronicCare'

const GeneralMedicine = () => {
  return (
    <div>
      <GeneralMedicineHero/>
      <MedicineKeyAreas/>
      <AcuteChronicCare/>
    </div>
  )
}

export default GeneralMedicine
