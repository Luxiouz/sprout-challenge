import FlightRow from "./FlightRow";

export default function FlightBoard({trip}) {

  return (
    <div className="flight-board w-100 py-3 mb-3">
      <div className="fw-bold text-end col-11">{trip?.itineraryPrice}$</div>
      <FlightRow journey={trip?.journeys[0]}></FlightRow>
      <div className="mb-3"></div>
      <FlightRow journey={trip?.journeys[1]}></FlightRow>
    </div>
  )
}
