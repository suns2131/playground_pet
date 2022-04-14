import React, { useState } from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { history } from "../redux/ConfigStore";
import ImageCard from "../componets/ImageCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { pink } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  const imgs = [];
  const [star, setstar] = useState(0);
  const [heart_state, setheart] = useState(false);
  imgs.push(props.imageSrc);
  imgs.push(
    "data:image/jpeg;base64,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"
  );
  console.log(props.imageSrc);

  const heart_click = () => {
    if (heart_state) setheart(false);
    else setheart(true);
  };

  const edit = () => {
    dispatch(postActions.editPostFB());
    history.push("/");
  };

  return (
    <React.Fragment>
      <Grid margin="auto" bg={"#EFF6FF"}>
        <Grid margin="auto" padding="16px">
          <Grid margin="auto" is_flex width="auto">
            <Text bold>상호명: {props.title}</Text>
            <Text bold>글쓴이: {props.nickname}</Text>
            <Text>작성시간: {props.createdAt}</Text>
            <Button
              bg={"skyblue"}
              width="50px"
              _onClick={edit}
            >
              수정
            </Button>
          </Grid>
        </Grid>
        <Grid margin="auto">
          <ImageCard imagelist={imgs} />
        </Grid>

        <Grid margin="auto" padding="16px">
          <Grid is_flex width="auto">
            <Text margin="0px" bold>
              <div>
                <Typography component="legend">별점</Typography>
                <Rating
                  name="simple-controlled"
                  value={star}
                  size="large"
                  onChange={(event, newValue) => {
                    setstar(newValue);
                  }}
                />
              </div>
            </Text>
            <div className="favorite_icon">
              <Text margin="0px" bold>
                좋아요 {props.good}개
              </Text>
              <Stack direction="row" spacing={1}>
                {heart_state === true ? (
                  <IconButton aria-label="Favorite" onClick={heart_click}>
                    <FavoriteIcon sx={{ fontSize: 50, color: pink[400] }} />
                  </IconButton>
                ) : (
                  <IconButton aria-label="FavoriteBorder" onClick={heart_click}>
                    <FavoriteBorderIcon
                      sx={{ fontSize: 50, color: pink[400] }}
                    />
                  </IconButton>
                )}
              </Stack>
            </div>
          </Grid>
        </Grid>
        <Grid margin="auto" padding="16px">
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
