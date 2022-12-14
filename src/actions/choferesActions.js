import { data } from "jquery";
import {
  LOAD,
  CREATE,
  UPDATE,
  DELETE,
  CLEAR,
  LOAD_PENDING,
} from "../types/index";

const loadChofers = (data) => ({ type: LOAD, payload: data });

const loadPending = () => ({ type: LOAD_PENDING});

const createChofers = (data) => ({ type: CREATE, payload: data });

const updateChoferes = (data) => ({ type: UPDATE, payload: data });

const deleteChoferes = (data) => ({ type: DELETE, payload: data });

const clearchoferes = () => ({ type: CLEAR });

export {
  loadChofers,
  createChofers,
  updateChoferes,
  deleteChoferes,
  clearchoferes,
  loadPending,
};
