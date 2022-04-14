import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'

//action
const LIKE = "LIKE";

//action creators
const setLike = createAction(LIKE, (like) => ({like}));

// initialState
const initialState = {
    list: [],
}

//middleware..
//좋아요 추가
const setLike_Create = (postid,username) => {
    return async function ({history}){
        const like_info = {
            postid : postid,
            username : username
        }
        axios.post("http://15.164.96.141/api/posts/like",
        like_info
        )
        .then(function (response){
            console.log('like_return')
            console.log(response)
        })
        .catch(function (error){

        })

    }
}

//좋아요 삭제
const setLike_Delete = (postid,username) => {
    return async function ({history}){
        console.log('like')
        const like_info = {
            postid : postid,
            username : username
        }

        axios.delete("http://localhost:3001/posts",
        like_info
        )
        .then(function (response){
            
        })
        .catch(function (error){

        })

    }
}

// reducer
export default handleActions(
    {
      [LIKE]: (state, action) =>
        produce(state, (draft) => {
          draft.list = action.payload.post_list.heart;
        }),
    },
    initialState
  );


// action creator export
const actionCreators = {
    setLike_Create,
    setLike_Delete,
  };

export { actionCreators };