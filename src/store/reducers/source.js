import { SET_SOURCE } from "../actions/actionTypes";

export default source;
export const initialState = { jdlite: false, androidApp: false, iosApp: false, wap: false };

function source(state = initialState, action = {}) {
    switch (action.type) {
        case SET_SOURCE:
            return setSource(state, action.payload);
        default: return state;
    }
}
function setSource(state, payload) {
    return { 
      ...state,
      payload
    } 
  } 