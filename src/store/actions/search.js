import * as TYPES from "./searchActionTypes";

import SearchService from "./../../shared/services/SearchService";

/* export const getPopularCitiesAction = payload => ({ 
  type: GET_POPULAR_CITIES, 
  payload 
}); */


export const getPopularCitiesAction = payload => ((dispatch) => {
  dispatch({
    type: TYPES.POPULAR_CITIES_INITIATED,
    payload
  });
  return SearchService.getPopularCities().then(payload => {
    dispatch({
      type: TYPES.POPULAR_CITIES_RESPONSE,
      payload
    });
  }).catch(error => {
    dispatch({
      type: TYPES.POPULAR_CITIES_FAILURE,
      error
    });
  });
});

export const destinationSearchAction = payload => ((dispatch) => {
  dispatch({
    type: TYPES.DESTINATION_SEARCH_INITIATED,
    payload
  });
  return SearchService.destinationSearch(payload).then(payload => {
    dispatch({
      type: TYPES.DESTINATION_SEARCH_RESPONSE,
      payload
    });
  }).catch(error => {
    dispatch({
      type: TYPES.DESTINATION_SEARCH_FAILURE,
      error
    });
  });
});
export const resetDestinationToAction = payload => ((dispatch) => {
  dispatch({
    type: TYPES.RESET_DESTINATION_TO,
    payload
  });
});

