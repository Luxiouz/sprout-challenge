import React, { useReducer } from 'react'
import FlightContext from './FlightContext';
import FlightReducer from './FlightReducer';

export default function FlightState({ children }) {

    const initialState = {
        loading: false,
        carriers: null,
        trips: null,
        currentStopInfo: null,
        currentTripPage: 1,
        pageSize: 5,
        totalPages: 1,
        totalTrips: null,
    }

    const setTripPage = (inc) => {
        dispatch(
            {
                type: 'PAGE_TRIPS',
                payload: inc,
            }
        )
    }

    const getFlights = async () => {
        try {
            dispatch({
                type: 'FETCH_FLIGHTS',
                payload: null,
            })
            const dataFetch = await fetch('http://localhost:4000/flights');
            const data = await dataFetch.json();
            dispatch({
                type: 'GET_FLIGHTS',
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }

    const setStopInfo = (stops) => {
        dispatch({
            type: 'UPDATE_STOPS',
            payload: stops
        })
    }

    const [state, dispatch] = useReducer(FlightReducer, initialState);

    return (
        <FlightContext.Provider
            value={{
                loading: state?.loading,
                carriers: state?.carriers || [],
                trips: state?.trips || {},
                currentStopInfo: state?.currentStopInfo,
                currentTripPage: state?.currentTripPage,
                totalPages: state?.totalPages,
                getFlights,
                setStopInfo,
                setTripPage,
            }}
        >
            {children}
        </FlightContext.Provider>
    )
}
