// import Immutable from "immutable";
import { handleActions, createAction } from "redux-actions";

const actions = {
  SET_USER_INFO: "SET_USER_INFO",
  SET_LOGIN_STATUS: "SET_LOGIN_STATUS"
};

const store = {
  isLogin: false,
  userInfo: {}
};

const reducers = {
  [actions.SET_USER_INFO]: (state, { payload }) => {
    state.userInfo = payload;
    return { ...state };
  },
  [actions.SET_LOGIN_STATUS]: (state, { payload }) => {
    state.isLogin = payload;
    return { ...state };
  }
};

export const setUserInfo = createAction(actions.SET_USER_INFO);
export const setLoginStatus = createAction(actions.SET_LOGIN_STATUS);

export default handleActions(reducers, store);
