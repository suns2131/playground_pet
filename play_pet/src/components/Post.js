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
  const post_data = props.post_data;
  const dispatch = useDispatch();
  let defaultstar = 0;
  let imgs = [];
  console.log(post_data?.imageSrc)
  if(post_data?.imageSrc != undefined)
    imgs = [...post_data?.imageSrc];
  let defaultheart = false;
  defaultstar = post_data?.star;
  const [star,setstar] = useState(defaultstar);
  const [heart_state,setheart] = useState(defaultheart);

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