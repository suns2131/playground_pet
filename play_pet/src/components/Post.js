import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";
// import { history } from "../redux/ConfigStore";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid bg={"#EFF6FF"}>
        <Grid padding="16px">
          <Grid is_flex width="auto">
            <Text bold>상호명: {props.title}</Text>
            <Text bold>글쓴이: {props.nickname}</Text>
            <Text>작성시간: {props.createdAt}</Text>
          </Grid>
        </Grid>

        <Grid margin="30px 0px 0px 0px">
          <Image shape="rectangle" src={props.imageSrc} />
        </Grid>

        <Grid padding="16px">
          <Grid is_flex width="auto">
            <Text margin="0px" bold>
              별점 {props.star}
            </Text>
            <Text margin="0px" bold>
              좋아요 {props.good}개
            </Text>
          </Grid>
        </Grid>

        <Grid padding="16px">
          <Text>{props.content}</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  title: "레인바우",
  nickname: "댕댕주인",
  imageSrc:
    "https://post-phinf.pstatic.net/MjAyMTAyMTlfMjgw/MDAxNjEzNzE4MDA5Nzg0.RyG2JfpNJTOrvnrM7fhmfjEUc9MEIxkozVfIPymIWOUg.lIHMRVfSlXQG1k7U7py_mqJi0CLrZ1GOdVeynv0x-7Mg.JPEG/%ED%95%98%ED%8A%B8%EB%8F%85_2_19.jpg?type=w1200",
  star: "⭐️⭐️⭐️",
  good: 3,
  content: "최고의 강아지 놀이터",
  createdAt: "2022-04-01 23:33:35",
};

export default Post;
