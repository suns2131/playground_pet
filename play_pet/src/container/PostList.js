//PostList.js
import React from "react";

import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";
import Grid from "../elements/Grid";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  // const user_info = useSelector((state) => state.user.user);
  // const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);

  const { history } = props;

  React.useEffect(() => {
    if (post_list.length < 2) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid margin="auto" bg={"#EFF6FF"} padding="20px 0px">
        <InfinityScroll
          callNext={() => {
            dispatch(postActions.getPostFB(paging.next));
          }}
          is_next={paging.next ? true : false}
          // loading={is_loading}
        >
          {post_list.map((p, idx) => {
            console.log(p);
            // if (user_info && p.user_info.user_id === user_info.uid) {
              return (
                <Grid
                  bg="#ffffff"
                  margin="15px 0px"
                  key={p.id}
                  _onClick={() => {
                    history.push(`/post/${p.id}`);
                  }}
                >
                  <Post {...p} is_me />
                </Grid>
              );
            // } else {
            //   return (
            //     <Grid
            //       bg="#ffffff"
            //       key={p.id}
            //       _onClick={() => {
            //         history.push(`/post/${p.id}`);
            //       }}
            //     >
            //       <Post {...p} />
            //     </Grid>
            //   );
            // }
          })}
        </InfinityScroll>
      </Grid>
    </React.Fragment>
  );
};

export default PostList;
