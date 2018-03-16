import { FETCH_HOTELS } from "../actions/actionTypes";

export default result;
export const initialState = { destination: {}, queryDates: {} };

function result(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_HOTELS:
            return fetchHotels(state, action.expense);
        default: return state;
    }
}
function fetchHotels(state, expense) {
    return { 
      ...state
    } 
  } 