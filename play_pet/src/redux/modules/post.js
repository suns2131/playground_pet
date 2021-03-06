import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const ADD_POST = "ADD_POST";
const SET_POST = "SET_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list, page) => ({
  post_list,
  page,
}));

const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (postid, post) => ({
  postid,
  post,
}));



const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const deletePost = createAction(DELETE_POST, (postid) => ({
  postid,
}));

const initialState = {
  list: [],
  page: { start: null, next: null, size: 3},
  is_loading: false,
};

const initialPost = {
  title: "레인바우",
  username: "댕댕주인",
  imageSrc:
    "https://post-phinf.pstatic.net/MjAyMTAyMTlfMjgw/MDAxNjEzNzE4MDA5Nzg0.RyG2JfpNJTOrvnrM7fhmfjEUc9MEIxkozVfIPymIWOUg.lIHMRVfSlXQG1k7U7py_mqJi0CLrZ1GOdVeynv0x-7Mg.JPEG/%ED%95%98%ED%8A%B8%EB%8F%85_2_19.jpg?type=w1200",
  star: "⭐️⭐️⭐️",
  good: 3,
  content: "최고의 강아지 놀이터",
};

// editPostFB put방식 ?? formdata
const editPostFB = (postid, title, content, imageSrc, star, username) => {
  return async function (dispatch, getState, { history }) {
    const form = new FormData();

    form.append('postid', postid)
    form.append('title', title)
    form.append('content', content)
    form.append('imageSrc', imageSrc)
    form.append('star', star)
    form.append('username', username)

    axios
      .put(
        "http://15.164.96.141/api/posts",
       form
      )
      .then(function (response) {
        history.push("/");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


const getPostFB = (page, username) => {
  return async function (dispatch, getState, { history }) {
    axios
      .get("http://15.164.96.141/api/posts", {
        params: {
          page: page,
          username: username,
        },
      })
      .then(function (response) {
        let post_list = [...response.data].reverse();
        dispatch(setPost(post_list, page))
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const deletePostFB = (postid) => {
  return async function (dispatch, getState, {history}) {
    axios
    .delete("http://15.164.96.141/api/posts", postid)
    .then(function(response){
      window.alert("삭제 완료되었습니다.");
      history.push("/");
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);

        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.id === cur.id) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.id === cur.id)] = cur;
            return acc;
          }
        }, []);

        if (action.payload.paging) {
          draft.paging = action.payload.paging;
        }

        draft.is_loading = false;
      }),

    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.postid);

        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),

    [DELETE_POST]: (state, action) => produce(state, (draft) => {

    }),
  },
  initialState
);

const actionCreators = {
  setPost,
  editPost,
  getPostFB,
  editPostFB,
  deletePost,
  deletePostFB,
};

export { actionCreators };
