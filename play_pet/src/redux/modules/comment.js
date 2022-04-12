import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import {actionCreators as postActions} from "./post";

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
}

const addCommentFB = (postid, content) => {
    return function (dispatch, getState, {history}) {
        // const commentDB = firestore.collection("comment");
        const user_info = getState().user.user;

        console.log(user_info)
    }
}