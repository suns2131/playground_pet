// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import { firestore, storage } from "../../shared/firebase";

// const SET_POST = "SET_POST";
// const ADD_POST = "ADD_POST";
// const EDIT_POST = "EDIT_POST";
// const LOADING = "LOADING";

// const setPost = createAction(SET_POST, (post_list, paging) => ({
//   post_list,
//   paging,
// }));
// const addPost = createAction(ADD_POST, (post) => ({ post }));
// const editPost = createAction(EDIT_POST, (postid, post) => ({
//   postid,
//   post,
// }));
// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// const initialState = {
//   list: [],
//   paging: { start: null, next: null, size: 3 },
//   is_loading: false,
// };

// const initialPost = {
//   title: "레인바우",
//   username: "댕댕주인",
//   imageSrc:
//     "https://post-phinf.pstatic.net/MjAyMTAyMTlfMjgw/MDAxNjEzNzE4MDA5Nzg0.RyG2JfpNJTOrvnrM7fhmfjEUc9MEIxkozVfIPymIWOUg.lIHMRVfSlXQG1k7U7py_mqJi0CLrZ1GOdVeynv0x-7Mg.JPEG/%ED%95%98%ED%8A%B8%EB%8F%85_2_19.jpg?type=w1200",
//   star: "⭐️⭐️⭐️",
//   good: 3,
//   content: "최고의 강아지 놀이터",
// };

// const getPostFB = (start = null, size = 3) => {
//   return function (diapatch, getState, { history }) {
//     let _paging = getState.post.paging;

//     if (_paging.start && !_paging.next) {
//       return;
//     }

//     dispatch(loading(true));
//     const postDB = firestore.collection("post");

//     let query = postDB;

//     if (start) {
//       query = query.startAt(start);
//     }

//     query
//       .limit(size + 1)
//       .get()
//       .then((docs) => {
//         let post_list = [];

//         let paging = {
//           start: docs.docs[0],
//           next:
//             docs.docs.length === size + 1
//               ? docs.docs[docs.docs.length - 1]
//               : null,
//           size: size,
//         };
//       });
//   };
// };

// const actionCreators = {
//   setPost,
//   addPost,
//   editPost,
//   getPostFB,
//   addPostFB,
//   editPostFB,
//   getOnePostFB,
// };

// export { actionCreators };
