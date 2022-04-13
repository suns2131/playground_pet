import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'
import { push } from "connected-react-router";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// action creators
 const setPost = createAction(SET_POST, (post_list) => ({post_list}));
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
        //'http://15.164.96.141/api/posts'
        //'http://localhost:3001/result'
        axios.get('http://15.164.96.141/api/posts',{
          params : {
            page:postid
          }
        })
        .then(function (response)
        {
          console.log('getpost');
          console.log(response);
          dispatch(setPost(response.data))
        })
        .catch(function (error){
          console.log(error)
        })
    }
}

const addpostTS = (post) => {
    return async function ({history}){
         console.log(post)
        const postdata = new FormData();
        postdata.append('title',post.title);
        postdata.append('star',post.star);
        postdata.append('content',post.content);
        postdata.append('username',post.username);
        postdata.append('images',post.image_file1);
        postdata.append('images',post.image_file2);
        postdata.append('images',post.image_file3);
        postdata.append('images',post.image_file4);
        postdata.append('images',post.image_file5);
        postdata.append('images',post.image_file6);

        const config = {
          Headers : {
            'content-type' : 'multipart/form-data',
          }
        }
        //http://15.164.96.141/api/posts
        //http://localhost:3001/posts
        axios.post(
          'http://15.164.96.141/api/posts',
          postdata,
          config
        ).then(function (response){
           console.log(response)
           history.push("/list")
        }).catch(function (error){
          console.log(error)
        })
    }
}

const updatePostTS = (post) =>{
  return async function (dispatch,getState,{history}){
    axios.put(
      'http://localhost:3001/posts',
      post
    ).then(function (response){
      console.log(response)
      // history.push("/Card")
    }).catch(function (error){
      console.log(error)
    })
  }
}

const deletePostTS = (post) =>{
  return async function (dispatch,getState,{history}){
    axios.delete(
      'http://localhost:3001/posts'
    ).then(function (response){
      console.log(response)
      // history.push("/Card")
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
    updatePostTS,
    deletePostTS,
  };
  
  export { actionCreators };
