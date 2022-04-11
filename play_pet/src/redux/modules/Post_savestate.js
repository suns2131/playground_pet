import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'
import { push } from "connected-react-router";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// action creators
// const setPost = createAction(SET_POST, (post_list) => ({post_list}));
// const addPost = createAction(ADD_POST, (post) => ({post}));

// 게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어둡시다! :)
const initialPost = {
    postid : 1,
    title : '',
    content : '',
    image_src : '',
    good : 0,
    star : 0,
  };

// initialState
const initialState = {
    list: [],
}



//middle wares..
const getPostID = (postid) => {
    return async function (dispatch,getState,{history}){
        console.log(postid)
        axios.get('http://localhost:3001/result',{
          params : {
            id : postid
          }
        })
        .then(function (response)
        {
          console.log(response);
        })
        .catch(function (error){
          console.log(error)
        })
    }
}

const addpostTS = (post) => {
    return async function (dispatch,getState,{history}){
        console.log(post)
        axios.post(
          'http://localhost:3001/result',
           post
        ).then(function (response){
          history.push("/Card")
        }).catch(function (error){
          console.log(error)
        })
    }
}

// reducer
export default handleActions(
    {
      [SET_POST]: (state, action) =>
        produce(state, (draft) => {
          draft.list = action.payload.post_list;
        }),

       [ADD_POST]: (state, action) => 
        produce(state, (draft) => {
            draft.list = action.payload.post;
        })
    },
    initialState
  );
  
  // action creator export
  const actionCreators = {
    addpostTS,
    getPostID,
  };
  
  export { actionCreators };
