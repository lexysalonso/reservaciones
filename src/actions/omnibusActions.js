import {
  LOAD_OMNIBUS,
  CREATE_OMNIBUS,
  UPDATE_OMNIBUS,
  DELETE_OMNIBUS,
  CLEAR_OMNIBUS,
  OMNIBUS_DISPONIBLES,
  OMNIBUS_TALLER,
  OMNIBUS_MAS_VIAJES,
  LOAD_PENDING_OMNIBUS,
} from "../types/index";

const loadOmnibus = (data) => ({ type: LOAD_OMNIBUS, payload: data });

const loadOmnibusLoading = () => ({ type: LOAD_PENDING_OMNIBUS });

const createOmnibus = (data) => ({ type: CREATE_OMNIBUS, payload: data });

const updateOmnibus = (data) => ({ type: UPDATE_OMNIBUS, payload: data });

const deleteOmnibus = (data) => ({ type: DELETE_OMNIBUS, payload: data });

const clearOmnibus = () => ({ type: CLEAR_OMNIBUS });

const OmnibusTaller = (data) => ({ type: OMNIBUS_TALLER, payload: data });

const OmnibusDisponibles = (data) => ({
  type: OMNIBUS_DISPONIBLES,
  payload: data,
});

const OmnibusMasViajes = (data) => ({
  type: OMNIBUS_MAS_VIAJES,
  payload: data,
});

export {
  loadOmnibus,
  createOmnibus,
  updateOmnibus,
  deleteOmnibus,
  clearOmnibus,
  OmnibusTaller,
  OmnibusDisponibles,
  OmnibusMasViajes,
  loadOmnibusLoading,
};
