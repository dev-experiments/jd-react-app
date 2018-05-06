import { POPULAR_CITIES_INITIATED, POPULAR_CITIES_RESPONSE, POPULAR_CITIES_FAILURE } from "./../actions/actionTypes";

import SearchService from "./../../shared/services/SearchService";

/* export const getPopularCitiesAction = payload => ({ 
  type: GET_POPULAR_CITIES, 
  payload 
}); */


export const getPopularCitiesAction = payload => ((dispatch) => {
  dispatch({
    type: POPULAR_CITIES_INITIATED,
    payload
  });
  return SearchService.getPopularCities().then(payload => {
    //dispatch(loadCatsSuccess(cats));
    dispatch({
      type: POPULAR_CITIES_RESPONSE,
      payload
    });
  }).catch(error => {
    dispatch({
      type: POPULAR_CITIES_FAILURE,
      error
    });
  });
});

