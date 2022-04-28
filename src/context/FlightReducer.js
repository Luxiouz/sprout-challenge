const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_FLIGHTS':
            return {
                ...state,
                loading: true,
                carriers: null,
                trips: null,
                currentTripPage: 1,
                totalPages: 1,
            }
        case 'PAGE_TRIPS':
            const page = state?.currentTripPage + action?.payload;
            if(page <= 0 || page > state?.totalPages) return state;
            const tripPage = state?.totalTrips?.slice((page - 1) * state?.pageSize, page * state?.pageSize);
            return {
                ...state,
                trips: tripPage,
                currentTripPage: page,
            }
        case 'UPDATE_STOPS':
            return {
                ...state,
                currentStopInfo: action?.payload,
            }
        case 'GET_FLIGHTS':
            const totalTrips = action?.payload?.options;
            const tripPageInit = totalTrips?.slice(0, state?.pageSize);
            return {
                ...state,
                loading: false,
                carriers: action?.payload?.carriers,
                currentTripPage: 1,
                trips: tripPageInit,
                totalTrips: totalTrips,
                totalPages:  Math.ceil(action?.payload?.options?.length/state.pageSize),
            }
        default:
            return state;
    }
}

export default reducer;