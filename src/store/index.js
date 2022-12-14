import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "../reducers";

export const store = createStore(rootreducer, applyMiddleware(thunk));
