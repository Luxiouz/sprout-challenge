import React, { useContext } from 'react'
import FlightContext from '../context/FlightContext'
import { v4 as uuidv4 } from 'uuid';

export default function FlightStopInfo() {
    const {carriers, currentStopInfo} = useContext(FlightContext);

    return (
        <div className="modal fade" id="stopsModal" tabIndex="-1" aria-labelledby="stops information" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Stops Detail</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body overflow-auto">
                        <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Origin</th>
                                        <th>Departure</th>
                                        <th>Destination</th>
                                        <th>Arrival</th>
                                        <th>Airline</th>
                                        <th>Flight</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentStopInfo && currentStopInfo.map(segment => 
                                        <tr key={uuidv4()}>
                                            <td>{segment?.originPlace?.name}</td>
                                            <td>{segment?.departureDateTime}</td>
                                            <td>{segment?.destinationPlace?.name}</td>
                                            <td>{segment?.arrivalDateTime}</td>
                                            <td>{carriers[segment?.marketingAirline]}</td>
                                            <td>{segment?.marketingFlightNumber}</td>
                                            <td>{segment?.duration}m</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                    </div>

                </div>
            </div>
        </div>
    )
}
