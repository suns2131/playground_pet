import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션 타입
const SET_COMMENT = "SET_COMMNET";
const ADD_COMMENT = "ADD_COMMENT";

// 액션 생성자
const setCommnet = createAction(SET_COMMENT, (postid, comment_list) => ({
  postid,
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (postid, comment) => ({
  postid,
  comment,
}));

// initial state
const initialState = {
  list: {},
};

// 미들 웨어
const addCommentFB = (postid, username, content) => {
  return async function (dispatch, getState, { history }) {
    axios
      .post("http://localhost:3001/result", postid, username, content)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const getCommentFB = (postid) => {
  return async function (dispatch, getState, { history }) {
    console.log(postid);
    axios
      .get("http://localhost:3001/result", {
        params: {
          id: postid,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postid] = action.payload.comment_list;
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postid].unshift(action.payload.comment);
      }),
  },
  initialState
);

const actionCreators = {
  getCommentFB,
  setCommnet,
  addComment,
  addCommentFB,
};

export { actionCreators };
