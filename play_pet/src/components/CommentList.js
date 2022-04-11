import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";

import {useDispatch, useSelector} from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {

  const dispatch = useDispatch();
  const comment_list = useSelector(state => state.comment.list);

  const {postid} = props;

  React.useEffect(() => {
    // 코멘트 정보 없으면 불러오기
    if(!comment_list[postid]){
      dispatch(commentActions.getCommentFB(postid))
    }
  },[]);
  // 코멘트가 없거나, postid가 없으면 아무것도 안넘겨준다!
  if(!comment_list[postid] || !postid){
    return null;
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        {comment_list[postid].map(c => {
          return (<CommentItem key={c.id} {...c}/>);
        })}
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { nickname, username, postid, content, createdAt } = props;
  return (
    <Grid is_flex>
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
