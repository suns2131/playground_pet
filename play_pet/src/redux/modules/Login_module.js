import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'
import { KAKAO_AUTH_URL } from "../../componets/Kakao_auth";

//action
const LOGIN = "LOGIN";

//action creators
const setLogin = createAction(LOGIN, (Login) => ({Login}));

// initialState
const initialState = {
    list: [],
}

//middleware..
//일반 로그인
const getLogin_nomal = (Login_info) => {

}

//카카오 로그인
const getLogin_kakao = (code) => {
    return async function (dispatch,getState,{history}){
        console.log('login start')
        const data = {
            code : code
        }
        //15.164.96.141/user/kakao/callback
        //http://localhost:3001/posts
        axios.post("http://localhost:3001/posts",
        data
        )
        .then(function (response){
          console.log('response')
            console.log(response)
            console.log(history)
            history.push('/list')
            // window.location.replace("/list")
        })
        .catch(function (error){

        })
    }
}

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
    getLogin_nomal,
    getLogin_kakao,
  };
  
  export { actionCreators };