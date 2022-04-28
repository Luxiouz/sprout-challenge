import React, { useContext, useEffect } from 'react'
import FlightContext from '../context/FlightContext'
import FlightBoard from './FlightBoard';
import { v4 as uuidv4 } from 'uuid';
import FlighBoardPH from './placeholder/FlighBoardPH';
import Pagination from './shared/Pagination';

export default function FlightPage() {

  const { loading, trips, getFlights, currentTripPage, totalPages, setTripPage } = useContext(FlightContext);

  useEffect(() => {
    getFlights();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flight-page container-lg'>
      {loading &&
        <div>
          <FlighBoardPH></FlighBoardPH>
          <FlighBoardPH></FlighBoardPH>
          <FlighBoardPH></FlighBoardPH>
          <FlighBoardPH></FlighBoardPH>
          <FlighBoardPH></FlighBoardPH>
        </div>}
      {trips?.map?.(trip => <FlightBoard key={uuidv4()} trip={trip}></FlightBoard>)}
      <Pagination page={currentTripPage} total={totalPages} onUp={() => { setTripPage(1) }} onDown={() => { setTripPage(-1) }}></Pagination>

    </div>
  )
}
