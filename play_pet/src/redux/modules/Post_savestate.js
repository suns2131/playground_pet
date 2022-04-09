import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// action creators
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));
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
const getPostFB = () => {
    return async function (dispatch,getState,{history}){
        // const postdata = getDocs(collection(db,'post'));
        // const post_list = [];
        // (await postdata).forEach((post) => {
        //     console.log(post.id,post.data());

        //     let _post = {
        //         id : post.id,
        //         ...post.data()
        //     }
            
        //     post_list.push(_post);
        // })
        // console.log(post_list);
        // dispatch(setPost(post_list));
    }
}


const addpostTS = (type,post) => {
    return async function (dispatch,getState,{history}){
        const posts = getState();
        console.log( 'posts : ')
        console.log(posts)
        console.log('type : '+type)
        console.log('post : '+post)
        console.log(posts.post.list.star)
        const shot_post = {
            ...posts
        }
        //  if(type == 'star')
        //      posts.list.star = post;
        console.log( 'posts2 : ')
        console.log(shot_post)

        

        // const user_info = {
        //     user_name :_user.user_name,
        // }
        // const post = {
        //     insert_dt : moment().format("YYYY-MM-DD hh:mm:ss"),
        //     image_src : image_src,
        //     content : content,
        //     content_layout : layout,
        // }
        // console.log("Document written with ID: ", docRef.id)
        // history.push("/");
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
    getPostFB,
  };
  
  export { actionCreators };
