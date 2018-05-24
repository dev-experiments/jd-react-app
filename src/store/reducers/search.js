import * as TYPES from "./../actions/searchActionTypes";
import RoomClass from './../../classes/RoomClass.js';

const roomDetails = new RoomClass();
roomDetails.addAdult();

export default search;
export const initialState = {
    popular_cities: [],
    checkin_date: {
        label: ''
    },
    checkout_date: {
        label: ''
    },
    destination_results: [],
    destination: [],
    room_details: roomDetails
};

function search(state = initialState, action = {}) {
    switch (action.type) {
        case TYPES.POPULAR_CITIES_INITIATED:
            return getPopularCities(state, action.payload);
        case TYPES.POPULAR_CITIES_RESPONSE:
            return setPopularCities(state, action.payload);
        case TYPES.POPULAR_CITIES_FAILURE:
            return setPopularCities(state, action.error);
        case TYPES.RESET_DESTINATION_TO:
            return resetDestinationTo(state, action.payload);

        case TYPES.DESTINATION_SEARCH_INITIATED:
            return getDestinationSearch(state, action.payload);
        case TYPES.DESTINATION_SEARCH_RESPONSE:
            return setDestinationSearch(state, action.payload);
        case TYPES.DESTINATION_SEARCH_FAILURE:
            return setDestinationSearch(state, action.error);

        case TYPES.SET_ROOM_DETAILS:
            return setRoomDetails(state, action.payload);
        default: return state;
    }
}

function getPopularCities(state, payload) {
    return {
        ...state, popular_cities: []
    }
}

function setPopularCities(state, payload) {
    return {
        ...state, popular_cities: payload.data, destination_results: payload.data
    }
}
function getDestinationSearch(state, payload) {

    return {
        ...state, destination_results: []
    }
}
function setDestinationSearch(state, payload) {
    const data = [{
        items: payload.data
    }]

    return {
        ...state, destination_results: data
    }
}
function resetDestinationTo(state, payload) {
    return {
        ...state, destination_results: payload
    }
}

function setRoomDetails(state, payload) {
    return {
        ...state, room_details: payload
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