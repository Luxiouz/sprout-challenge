import React from 'react'

export default function FlightRowPH() {
  return (
    <div className="flight-board__row row d-flex justify-content-center">
            <div className="d-flex flex-row justify-content-between align-items-center col-12 col-md-10 col-xl-7 p-3">
                <div className="placeholder-glow d-flex flex-row justify-content-between align-items-center">
                    <div style={{width: '60px', height: '60px'}} className="placeholder btn btn-primary disabled"></div>
                    <div className="placeholder-glow d-flex flex-column justify-content-center align-items-start ms-5">
                        <h2 className="placeholder m-0 text-start placeholder mb-1">SFO</h2>
                        <p className="placeholder m-0 text-start placeholder ">Jan 01 12:00pm</p>
                    </div>
                </div>
                <div className="placeholder-glow d-flex flex-column justify-content-center align-items-center">
                    <span className='placeholder'>airline</span>
                    <div className="divider m-1"></div>
                    <span className='placeholder'>nonstop</span>

                </div>
                <div className="placeholder-glow d-flex flex-column justify-content-cen ter align-items-start">
                    <h2 className="placeholder m-0 text-start mb-1">SFO</h2>
                    <p className="placeholder m-0 text-start">Jan 01 12:00pm</p>
                </div>
            </div>
        </div>
  )
}
