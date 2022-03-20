import { IRent } from 'model/interfaces/IRent';

export interface RentState {
  rents: IRent[];
  locationId: number;
  metroId: number | null;
  districtId: number | null;
  loading: boolean;
  error: null | string;
}

export enum RentActionTypes {
  FETCH_RENT = 'FETCH_RENT',
  FETCH_RENT_SUCCESS = 'FETCH_RENT_SUCCESS',
  FETCH_RENT_ERROR = 'FETCH_RENT_ERROR',
  SET_RENT_LOCATION_ID = 'SET_RENT_LOCATION_ID',
  SET_RENT_METRO_ID = 'SET_RENT_METRO_ID',
  SET_RENT_DISTRICT_ID = 'SET_RENT_DISTRICT_ID',
}

interface FetchRentAction {
  type: RentActionTypes.FETCH_RENT;
}

interface FetchRentSuccessAction {
  type: RentActionTypes.FETCH_RENT_SUCCESS;
  payload: IRent[];
}

interface FetchRentErrorAction {
  type: RentActionTypes.FETCH_RENT_ERROR;
  payload: string;
}

interface SetRentLocationIdAction {
  type: RentActionTypes.SET_RENT_LOCATION_ID;
  payload: number;
}

interface SetRentMetroIdAction {
  type: RentActionTypes.SET_RENT_METRO_ID;
  payload: number;
}

interface SetRentDistrictIdAction {
  type: RentActionTypes.SET_RENT_DISTRICT_ID;
  payload: number;
}

export type RentAction =
  | FetchRentAction
  | FetchRentSuccessAction
  | FetchRentErrorAction
  | SetRentLocationIdAction
  | SetRentMetroIdAction
  | SetRentDistrictIdAction;
