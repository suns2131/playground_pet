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
import {actionCreators as LikeActions} from '../redux/modules/Like_module'

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
    if(heart_state)
    {
      setheart(false);
      console.log(post_data.postId)
      if(post_data?.postId != undefined)
      {
        console.log(1)
        dispatch(LikeActions.setLike_Delete(post_data.postId,'abc'))
      }
        
    }
        
    else 
    {
      setheart(true);
      if(post_data?.postId != undefined)
        dispatch(LikeActions.setLike_Create(post_data.postid,'abc'))
    }
        
  }

return (
<React.Fragment>
  <Grid margin="auto" bg={"#EFF6FF"}>
    <Grid margin="auto"  padding="16px">
      <Grid is_flex width="auto">
            <Text bold>{post_data?.title}</Text>
            <Text bold>글쓴이: {post_data?.nickname}</Text>
            <Text>작성시간: {post_data?.createdAt}</Text>
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                margin="4px"
                _onClick={() => {
                  history.push(`/write/${post_data[0].postid}`);
                }}
              >
                수정
              </Button>
            )}
      </Grid>
      <Grid margin="30px 0px 0px 0px" width="100%">
        <ImageCard imagelist={imgs} />
      </Grid>

      <Grid padding="16px">
        <Grid is_flex width="auto">
          <Text margin="0px" bold>
            <div>
              <Typography component="legend">별점</Typography>
              <Rating
                name="simple-controlled"
                readOnly
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
              좋아요 {post_data?.good}개
            </Text>
            <Stack direction="row" spacing={1}>
              {heart_state === true ? (
                <IconButton aria-label="Favorite" onClick={heart_click}>
                  <FavoriteIcon sx={{ fontSize: 50, color: pink[400] }} />
                </IconButton>
                ) : (
                <IconButton
                  aria-label="FavoriteBorder"
                  onClick={heart_click}
                  >
                  <FavoriteBorderIcon
                    sx={{ fontSize: 50, color: pink[400] }}
                  />
                </IconButton>)
              }
            </Stack>
          </div>
        </Grid>
        <Grid>
          <Grid padding="16px">
            <Text>{post_data?.content}</Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</React.Fragment>
);
}

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