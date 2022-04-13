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
    const cur_state = getState();
    const comment_data = {
        postid : postid,
        username : username,
        content: content,
    }
    //http://localhost:3001/comments
    //http://15.164.96.141/api/posts
    axios.post("http://localhost:3001/comments",
       comment_data
      )
      .then(function (response) {
        console.log(response.data);
        
        dispatch(addComment(postid,response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const getCommentFB = (postid) => {
  return async function (dispatch, getState, { history }) {
    console.log('postid');
    console.log(postid);
    //http://localhost:3001/comments
    //http://15.164.96.141/api/posts/comment
    axios
      .get("http://15.164.96.141/api/posts/comment", {
        params: {
          postid: postid,
        },
      })
      .then(function (response) {
        let comment_list = [...response.data].reverse();
         dispatch(setCommnet(postid,comment_list))
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log('reducer data')
        console.log(action.payload.comment_list)
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
