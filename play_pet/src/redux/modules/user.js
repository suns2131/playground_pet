import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, deleteCookie } from "../../shared/Cookie";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

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
   return async function (dispatch, getState, { history }) {
    await axios({
      method: "POST",
      url: "http://15.164.96.141/user/login",
      data: {
        username : id,
        password: pwd,
      },
    })
      .then(function (response) {
        if(response.data.result === true){
          // dispatch(
          //   setUser({
          //     nickname: response.data.nickname
          //   })
          // );
          sessionStorage.setItem("nickname", response.data.nickname);
          // console.log(response.data)
          // sessionStorage.setItem("user_id", response.data.id);
          history.push('/list');
        } else {
          alert(response.data.err_msg);
        }
      })
      .catch((err) => {
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
        if(res.data.result === true){
          alert('계정이 생성 되었습니다!')
          history.push("/");
        }else {
          alert(res.data.err_msg);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
};

const logoutFB = (id) => {
  return function (dispatch, getState, { history }) {
        // dispatch(logOut());
        sessionStorage.removeItem('user_id');
        history.push("/");
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success", 3);
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        // draft.user = null;
        // draft.is_login = false;
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
};

export { actionCreators };
