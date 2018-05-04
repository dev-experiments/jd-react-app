import { SET_CURRENT_VIEW, POPULAR_CITIES_INITIATED, POPULAR_CITIES_RESPONSE, POPULAR_CITIES_FAILURE} from "./../actions/actionTypes";

export default search;
export const initialState = {
    current_view: 'search_form',
    popular_cities: [],
    checkin_date: {
        label: ''
    }, checkout_date: {
        label: ''
    }, room_details: []
};

function search(state = initialState, action = {}) {
    switch (action.type) {
        case SET_CURRENT_VIEW:
            return setCurrentView(state, action.payload);
        case POPULAR_CITIES_INITIATED:
            return getPopularCities(state, action.payload);
        case POPULAR_CITIES_RESPONSE:
            return setPopularCities(state, action.payload);
        case POPULAR_CITIES_FAILURE:
            return setPopularCities(state, action.payload);
        default: return state;
    }
}

function setCurrentView(state, payload) {

    return {
        ...state, current_view: payload
    }
}

function getPopularCities(state, payload) {
   
    return {
        ...state, popular_cities: []
    }
}
function setPopularCities(state, payload) {
   
    return {
        ...state, popular_cities: payload.data
    }
}

/* function setCheckIn(state, payload) {
    return {
        ...state,
    }
}

function setCheckOut(state, payload) {
    return {
        ...state
    }
}  */