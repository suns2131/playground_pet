import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Input from "../elements/Input";

import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch } from "react-redux";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState();

  const { postid } = props;

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const write = () => {
    dispatch(commentActions.addCommentFB(postid, content));
    console.log(content);
    setContent("");
  };
  return (
    <React.Fragment>
      <Grid margin="auto" bg={"#EFF6FF"} padding="16px" is_flex>
        <Input
          label="댓글 남기기"
          placeholder="댓글 내용을 입력해주세요 ;)"
          _onChange={onChange}
          value={content}
          onSubmit={write}
          is_submit
        />
        <Button bg={"skyblue"} width="50px" margin="60px auto auto 0px" _onClick={write}>
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
