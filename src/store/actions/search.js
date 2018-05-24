import * as TYPES from "./searchActionTypes";

import SearchService from "./../../shared/services/SearchService";

/* export const getPopularCitiesAction = payload => ({ 
  type: GET_POPULAR_CITIES, 
  payload 
}); */


export const getPopularCitiesAction = payload => ((dispatch, getState) => {

  const cities = getState().search.popular_cities;

  if (cities.length < 1) {
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

  } else {
    dispatch({
      type: TYPES.RESET_DESTINATION_TO,
      payload: cities
    });
  }


});

export const destinationSearchAction = payload => ((dispatch, getState) => {

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

export const setRoomDetails = payload => ((dispatch) => {
  dispatch({
    type: TYPES.SET_ROOM_DETAILS,
    payload
  });
});

