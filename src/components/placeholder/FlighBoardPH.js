import React from 'react'
import FlightRowPH from './FlightRowPH'

export default function FlighBoardPH() {
  return (
    <div className="placeholder-glow flight-board w-100 py-3 mb-3">
      <div className="fw-bold text-end col-11">
          <span className='placeholder'>150$</span>
      </div>
      <FlightRowPH></FlightRowPH>
      <div className="mb-3"></div>
      <FlightRowPH></FlightRowPH>
    </div>
  )
}
