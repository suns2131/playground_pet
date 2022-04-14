//PostList.js
import React from "react";
import Button from "@mui/material/Button";
// import Button from "../elements/Button";
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
  // const [page, setPage] = React.useState(1);
  // const page = 1;

  const { history } = props;

  React.useEffect(() => {
    dispatch(postActions.getPostFB(1, "abc"));
  }, []);

  // const nextPage = () => {
  //   setPage(page + 1)
  //   dispatch(postActions.getPostFB(page, "abc"))
  // };

  // const prevPage = () => {
  //   setPage(page - 1)
  //   dispatch(postActions.getPostFB(page, "abc"))
  // };

  return (
    <React.Fragment>
      <Headers />
      {post_list.map((p, idx) => {
        console.log(p);
        return (
          <Grid
            margin="auto"
            bg="#ffffff"
            key={p.postId}
            _onClick={() => {
              history.push(`/Detail/${p.postId}`);
            }}
          >
            <Post {...p} />
          </Grid>
        );
      })}
      <BtnDiv margin="0px 20px 0px 500px">
        <Button
          variant="contained"
          component="span"
          onClick={() => {
            history.push("/post");
          }}
        >
          후기 작성하기
        </Button>
      </BtnDiv>
      {/* <Button
        is_float1
        text=">"
        _onClick={nextPage}
      ></Button>
      <Button
        is_float2
        text="<"
        _onClick={prevPage}
      ></Button> */}
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
