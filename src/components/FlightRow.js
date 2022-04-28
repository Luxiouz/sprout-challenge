import React, { useContext } from 'react'
import moment from 'moment';
import FlightContext from '../context/FlightContext';
import IconAA from '../img/AA.png';
import IconAS from '../img/AS.webp';
import IconUA from '../img/UA.webp';
import IconPH from '../img/placeholder.png';

export default function FlightRow({ journey }) {

    const { carriers, setStopInfo } = useContext(FlightContext)
    const { arrivalDateTime, departureDateTime, originPlace, destinationPlace, segments } = journey;

    const formatDate = (date) => {
        return moment(date).format('MMM DD hh:mma')
    }

    const formatTime = (timeMin) => {
        const days = Math.floor(timeMin / (60 * 24));
        const hours = Math.floor((timeMin - days * 60 * 24) / 60);
        const minutes = timeMin - days * 60 * 24 - hours * 60;
        return `${days > 0 ? (days + 'd') : ''}${hours}h${minutes}m`
    }

    const showStopsInfo = () => {
        setStopInfo(segments);
    }

    const getIcon = (airline) => {
        switch (airline) {
            case "AA":
                return IconAA;
            case "AS":
                return IconAS;
            case "UA":
                return IconUA;
            default:
                return IconPH;
        }
    }

    return (

        <div className="flight-board__row row d-flex justify-content-center">
            <div className="d-flex flex-row justify-content-between align-items-center col-12 col-md-10 col-xl-7 p-3">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <img src={getIcon(segments[0].marketingAirline)} className="d-none d-md-block m-0 me-5" alt="carrier logo" />
                    <div className="d-flex flex-column justify-content-center align-items-start">
                        <h2 className="m-0 text-start">{originPlace.code}</h2>
                        <p className="m-0 text-start">{formatDate(departureDateTime)}</p>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <span>{carriers[segments[0].marketingAirline]}</span>
                    <div className="divider m-1"></div>
                    <span onClick={showStopsInfo} data-bs-toggle="modal" data-bs-target="#stopsModal">{formatTime(segments.reduce((ac, segment) => ac + segment.duration, 0))} .
                        <span className={segments?.length > 1 ? 'fw-bold' : ''}>{segments?.length <= 1 ? 'nonstop' : `${segments.length - 1} ${segments.length > 2 ? 'stops' : 'stop'}`}</span>
                        {segments?.length > 1 && <span className="btn badge rounded-pill bg-warning text-dark ms-2">
                            <i className="bi bi-arrow-up-right-square-fill"></i>
                        </span>}</span>

                </div>
                <div className="d-flex flex-column justify-content-cen ter align-items-start">
                    <h2 className="m-0 text-start">{destinationPlace.code}</h2>
                    <p className="m-0 text-start">{formatDate(arrivalDateTime)}</p>
                </div>
            </div>
        </div>
    )
}
