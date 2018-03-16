import { SET_CHECKIN, SET_CHECKOUT, SET_SEARCHKEY, SET_SEARCHKEY_METADATA, ADD_ROOM } from "../actions/actionTypes";

export default search;
export const initialState = {
    checkInDate: {
        label: ''
    }, checkOutDate: {
        label: ''
    }, roomDetails: []
};

function search(state = initialState, action = {}) {
    switch (action.type) {
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