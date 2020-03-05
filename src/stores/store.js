import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
