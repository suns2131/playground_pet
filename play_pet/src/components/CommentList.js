import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";

const CommentList = () => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { nickname, username, postid, content, createdAt } = props;
  return (
    <Grid is_flex>
      {/* <Grid is_flex width="auto">
        <Text bold>{nickname}</Text>
      </Grid> */}
      <Grid is_flex margin="0px 4px">
        <Text bold>{nickname}</Text>
        <Text margin="0px">{content}</Text>
        <Text margin="0px">{createdAt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  nickname: "댕댕주인",
  username: "",
  postid: 1,
  content: "댕댕이가 너무 좋아해요 또 오겠습니다",
  createdAt: "2022-04-05 15:09:00",
};
