import { Dispatch } from 'redux';
import axios from 'axios';

import { API_URL, REST_API } from 'app.constants';
import { IRent } from 'model/interfaces/IRent';
import { RentAction, RentActionTypes } from 'store/types/rent';

interface FetchRentParams {
  locationId: number;
  metroId?: number | null;
  districtId?: number | null;
}

export const fetchRent = (params: FetchRentParams) => {
  return async (dispatch: Dispatch<RentAction>) => {
    try {
      dispatch({ type: RentActionTypes.FETCH_RENT });
      const response = await axios.get<IRent[]>(
        `${API_URL}${REST_API.rent}/${params.locationId}`,
        {
          params: { ...params },
        }
      );
      setTimeout(() => {
        dispatch({
          type: RentActionTypes.FETCH_RENT_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (e) {
      dispatch({
        type: RentActionTypes.FETCH_RENT_ERROR,
        payload: 'Произошла ошибка при загрузке квартир',
      });
    }
  };
};

export const setRentLocation = (locationId: number): RentAction => {
  return { type: RentActionTypes.SET_RENT_LOCATION_ID, payload: locationId };
};

export const setRentMetro = (metroId: number): RentAction => {
  return { type: RentActionTypes.SET_RENT_METRO_ID, payload: metroId };
};

export const setRentDistrict = (districtId: number): RentAction => {
  return { type: RentActionTypes.SET_RENT_DISTRICT_ID, payload: districtId };
};
