//PostList.js
import React from "react";
import Button from "@mui/material/Button";
import ArrowBtn from "../elements/Button";
import styled from "styled-components";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Grid from "../elements/Grid";
import Headers from "../shared/Headers";

const PostList = (props) => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  const [page, setPage] = React.useState(1);

  const { history } = props;

  React.useEffect(() => {
    dispatch(postActions.getPostFB(page, "abc"));
  }, []);

  const nextPage = () => {
    if (post_list.length < 10) {
      window.alert("마지막 페이지 입니다!");
      return;
    } else {
      setPage(page + 1);
      dispatch(postActions.getPostFB(page, "abc"));
    }
  };

  const prevPage = () => {
    if (post_list.length === 10) {
      window.alert("첫 페이지 입니다!");
      return;
    } else {
      setPage(page - 1);
      if (page > 0) {
        dispatch(postActions.getPostFB(page, "abc"));
      } else {
        return;
      }
    }
  };

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
      <ArrowBtn is_float1 text=">" _onClick={nextPage}></ArrowBtn>
      <ArrowBtn is_float2 text="<" _onClick={prevPage}></ArrowBtn>
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
