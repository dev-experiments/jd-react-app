import { SET_CURRENT_VIEW, GET_POPULAR_CITIES } from './actionTypes';

export const setCurrentViewAction = payload => ({ 
  type: SET_CURRENT_VIEW, 
  payload 
});

export const getPopularCitiesAction = payload => ({ 
  type: GET_POPULAR_CITIES, 
  payload 
});

