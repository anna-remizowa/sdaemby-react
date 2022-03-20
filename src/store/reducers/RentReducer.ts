import { RentAction, RentActionTypes, RentState } from 'store/types/rent';

const initialState: RentState = {
  rents: [],
  loading: false,
  error: null,
  locationId: 1,
  metroId: null,
  districtId: null,
};

export const rentReducer = (
  state = initialState,
  action: RentAction
): RentState => {
  switch (action.type) {
    case RentActionTypes.FETCH_RENT:
      return {
        ...state,
        loading: true,
      };
    case RentActionTypes.FETCH_RENT_SUCCESS:
      return { ...state, loading: false, rents: action.payload };
    case RentActionTypes.FETCH_RENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RentActionTypes.SET_RENT_LOCATION_ID:
      return { ...state, locationId: action.payload };
    case RentActionTypes.SET_RENT_METRO_ID:
      return { ...state, metroId: action.payload };
    case RentActionTypes.SET_RENT_DISTRICT_ID:
      return { ...state, districtId: action.payload };
    default:
      return state;
  }
};
