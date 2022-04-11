import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_POST = "SET_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const editPost = createAction(EDIT_POST, (postid, post) => ({
  postid,
  post,
}));
// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
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

// editPostFB put방식 ??
const editPostFB = (postid = null, post = {}) => {
    return async function (dispatch, getState, {history}){
        axios.put("http://localhost:3001/result")
    }
}

// page는 무슨 값으로 넘기지?
const getPostFB = (start = null, size = 3) => {
  return async function (diapatch, getState, { history }) {
   axios.get("http://localhost:3001/result",{
       params: {
           page: null,
       },
   })
   .then(function(response){
       console.log(response);
   })
   .catch(function(error){
       console.log(error);
   });
  };
};

export default handleActions(
    {
        [SET_POST]: (state, action) =>
        produce(state, (draft) => {
            draft.list.push(...action.payload.post_list);

            draft.list = draft.list.reduce((acc, cur) => {
                if (acc.findIndex((a) => a.id === cur.id) === -1){
                    return [...acc, cur];
                } else {
                    acc[acc.findIndex((a) => a.id === cur.id)] = cur;
                    return acc;
                }
            }, []);

            if (action.payload.paging){
                draft.paging = action.payload.paging;
            }

            // draft.is_loading = false;
        }),

        [EDIT_POST]: (state, action) => 
        produce(state, (draft) => {
            let idx = draft.list.findIndex((p) => p.id === action.payload.postid);

            draft.list[idx] = {...draft.list[idx], ...action.payload.post};
        }),
    },
    initialState
);

const actionCreators = {
  setPost,
  editPost,
  getPostFB,
  editPostFB,
};

export { actionCreators };
