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
  return async function (dispatch, getState, { history }) {
    try {
      let res = await axios({
        method: "POST",
        url: "/user/signup",
        data: {
          id: id,
          password: pwd,
        },
      });
      console.log(res);
      sessionStorage.setItem("user_id", id);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };
};

// const loginAction = (user) => {
//   return function (dispatch, getState, { history }) {
//     console.log(history);
//     dispatch(setUser(user));
//     history.push("/");
//   };
// };

const signupFB = (id, password, nickname) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "/user/signup",
      data: {
        username: id,
        password: password,
        nickname: nickname,
      },
    })
      .then((res) => {
        window.alert(res.data.result);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// const loginCheckFB = () => {
//   return function (dispatch, getState, { history }) {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         dispatch(
//           setUser({
//             user_name: user.displayName,
//             user_profile: "",
//             id: user.email,
//             uid: user.uid,
//           })
//         );
//       } else {
//         dispatch(logOut());
//       }
//     });
//   };
// };

const logoutFB = (id) => {
  return function (props, dispatch) {
    const onClickHandler = () => {
      axios.push("/api/users/logout").then((response) => {
        if (response.data.success) {
          dispatch(logOut());
          sessionStorage.removeItem(id);
          return props.history.push("/");
        } else {
          return alert("로그아웃에 실패했습니다.");
        }
      });
    };
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
};

export { actionCreators };
