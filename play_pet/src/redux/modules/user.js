import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, deleteCookie } from "../../shared/Cookie";


import axios from "axios";

import { useNavigate } from "react-router-dom";

//actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState
const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  user_name: "mean0",
  id: "tkdals0920@naver.com",
  pwd: "qwer1234",
};

//middleware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "POST",
        url: "http://15.164.96.141/user/login",
        data: {
          id: id,
          password: pwd,
        },
      }).then((res) => {
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        sessionStorage.setItem("user_id", id);
        // const accessToken = res.data.token;
        // setCookie("is_login", `${accessToken}`);
        history.push("/");
      }).catch(err =>{
        console.log(err);
        throw new Error(err);
      });
  };
};

const signupFB = (id, password, nickname) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://15.164.96.141/user/signup",
      data: {
        username: id,
        password: password,
        nickname: nickname,
      },
    })
      .then((res) => {
        // sessionStorage.setItem("user_id", id);
        // dispatch(setUser({nickname: nickname, id: id, user_profile: ''}));
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const logoutFB = (id) => {
  return function (props, dispatch, {history}) {
    dispatch(logOut());
    // sessionStorage.removeItem("user_id");
    sessionStorage.clear();
    localStorage.removeItem('token');
    history.push("/");
  };
};

const change = (username, nickname) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://15.164.96.141/user/nicknameCheck",
      data: {
        nickname: nickname,
        username : username,
      },
    })
      .then((res) => {
        // sessionStorage.setItem("user_id", id);
        // dispatch(setUser({nickname: nickname, id: id, user_profile: ''}));
        // history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  logOut,
  getUser,
  signupFB,
  loginFB,
  // loginCheckFB,
  logoutFB,
  change
};

export { actionCreators };
