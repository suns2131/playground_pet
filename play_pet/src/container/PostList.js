//PostList.js
import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";
import Grid from "../elements/Grid";
import Headers from "../shared/Headers";

const PostList = (props) => {

  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);

  const { history } = props;

  console.log(post_list);
  console.log(user_info);
  console.log(is_loading);
  console.log(paging);

  React.useEffect(() => {
      dispatch(postActions.getPostFB(1));
  }, []);

  return (
    <React.Fragment>
      <Headers/>
      {/* <Grid margin="auto" bg={"#EFF6FF"} padding="20px 0px"> */}
        <InfinityScroll
          callNext={() => {
            dispatch(postActions.getPostFB(paging.next));
          }}
          // is_next={paging.next ? true : false}
          loading={is_loading}
        >
          {post_list.map((p, idx) => {
            console.log(p);
            // if (user_info && p.user_info.user_id === user_info.uid) {
            //   return (
            //     <Grid
            //       bg="#ffffff"
            //       margin="15px 0px"
            //       key={p.id}
            //       _onClick={() => {
            //         history.push(`/post/${p.id}`);
            //       }}
            //     >
            //       <Post {...p} is_me />
            //     </Grid>
            //   );
            // } else {
              return (
                <Grid 
                  margin="auto"
                  bg="#ffffff"
                  key={p.postId}
                  _onClick={() => {
                    history.push({
                      pathname: `/Detail/${p.postId}`,
                      state:p
                    });
                  }}
                >
                  <Post {...p} />
                </Grid>
              );
            }
          // }
          )}
        </InfinityScroll>
      {/* </Grid> */}
        <BtnDiv margin="0px 20px 0px 500px">
          <Button variant="contained" component="span" onClick={() => {history.push("/post");}}>
            후기 작성하기
          </Button>
        </BtnDiv>
    </React.Fragment>
  );
};


const BtnDiv = styled.div`
  width: 120px;
  height: 50px;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 20px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default PostList;
