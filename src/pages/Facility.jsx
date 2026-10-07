import React from 'react'
import FacilitiesHero from '../components/facility/FacilitiesHero'
import FacilitiesOverview from '../components/facility/FacilitiesOverview'
import ICUFacility from '../components/facility/ICUFacility'
import OperationTheatre from '../components/facility/OperationTheatre'
import DiagnosticFacilities from '../components/facility/DiagnosticFacilities'
import PharmacyFacility from '../components/facility/PharmacyFacility'
import PatientRooms from '../components/facility/PatientRooms'
import AmbulanceFacility from '../components/facility/AmbulanceFacility'
import CashlessFacility from '../components/facility/CashlessFacility'
import FacilitiesDirectory from '../components/facility/FacilitiesDirectory'

const Facility = () => {
  return (
    <div>
      <FacilitiesHero/>
      <FacilitiesOverview/>
      <ICUFacility/>
      <OperationTheatre/>
      <DiagnosticFacilities/>
      <PharmacyFacility/>
      <PatientRooms/>
      <AmbulanceFacility/>
      <CashlessFacility/>
      <FacilitiesDirectory/>
    </div>
  )
}

export default Facility
