import  * as TYPES  from "./../actions/searchActionTypes";
export default source;
export const initialState = { jdlite: false, androidApp: false, iosApp: false, wap: false };

function source(state = initialState, action = {}) {
    switch (action.type) {
        case TYPES.SET_SOURCE:
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