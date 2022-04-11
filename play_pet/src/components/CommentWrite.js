import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Input from "../elements/Input";

import { useDispatch } from "react-redux";

const CommentWrite = (props) => {
  const [content, setContent] = React.useState();

  const { postid } = props;

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const write = () => {
    console.log(content);
    setContent("");
  };
  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글 내용을 입력해주세요 ;)"
          _onChange={onChange}
          value={content}
          onSubmit={write}
          is_submit
        />
        <Button width="50px" margin="45px 2px 0px 2px" _onClick={write}>
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
