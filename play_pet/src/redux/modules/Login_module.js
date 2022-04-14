import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { KAKAO_AUTH_URL } from "../../componets/Kakao_auth";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "./user";

//action
const LOGIN = "LOGIN";

//action creators
const setLogin = createAction(LOGIN, (Login) => ({ Login }));

// initialState
const initialState = {
  list: [],
};

//카카오 로그인
const GetLogin_kakao = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "POST",
      url: `http://15.164.96.141/user/kakao/callback?code=${code}`,
      data: {
        code: code,
      },
    })
      //15.164.96.141/user/kakao/callback
      //http://localhost:3001/posts
      .then(function (response) {
        console.log(response);
        if (response.data.nickname === null) {
          console.log(response.data.nickname);
          console.log(response.data.username);
          history.push({
            pathname: "/name",
            state: {
              nickname: response.data.nickname,
              username: response.data.username,
            }
          });
        } else {
          sessionStorage.setItem("user_id", response.data.nickname);
          history.push('/');
        }
      }).catch(function (error) {
        console.log(code);
        console.log("소셜로그인 에러", error);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/");
      });
  };
};

// reducer
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  // getLogin_nomal,
  GetLogin_kakao,
};

export { actionCreators };
