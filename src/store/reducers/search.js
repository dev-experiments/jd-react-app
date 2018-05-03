import { SET_CURRENT_VIEW, GET_POPULAR_CITIES, SET_CHECKIN, SET_CHECKOUT, SET_SEARCHKEY, SET_SEARCHKEY_METADATA, ADD_ROOM } from "./../actions/actionTypes";
import SearchService from "./../../shared/services/SearchService";

export default search;
export const initialState = {
    current_view: 'search_form',
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
        case GET_POPULAR_CITIES:
            return getPopularCities(state, action.payload);
        case SET_CHECKIN:
            return setCheckIn(state, action.payload);
        case SET_CHECKOUT:
            return setCheckOut(state, action.payload);
        case SET_SEARCHKEY:
            return setCheckOut(state, action.payload);
        case SET_SEARCHKEY_METADATA:
            return setCheckOut(state, action.payload);
        case ADD_ROOM:
            return setCheckOut(state, action.payload);
        default: return state;
    }
}

function setCurrentView(state, payload) {

    return {
        ...state, current_view: payload
    }
}

function getPopularCities(state, payload) {
   const data = SearchService.getPopularCities();
   console.log(data);
    return {
        ...state, current_view: payload
    }
}

function setCheckIn(state, payload) {
    return {
        ...state,
    }
}

function setCheckOut(state, payload) {
    return {
        ...state
    }
} 