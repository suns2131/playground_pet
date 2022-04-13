import React, { useState } from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { history } from "../redux/ConfigStore";
import ImageCard from "../componets/ImageCard";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { pink } from "@mui/material/colors";


const Post = (props) => {
  const post_data = props.post_data;
  console.log(post_data);
  let defaultstar = 0;
  let imgs = [];
  let defaultheart = false;
  if(post_data.length > 0)
  {
    imgs = [...post_data[0].imageSrc];
    defaultstar = post_data[0].star;
  }
    
  const [star,setstar] = useState(defaultstar);
  const [heart_state,setheart] = useState(defaultheart);

  const heart_click = () => {
    if(heart_state)
        setheart(false);
    else 
        setheart(true);
  }
  return (
    <React.Fragment>
      <Grid bg={"#EFF6FF"}>
        <Grid padding="16px">
          <Grid is_flex width="auto">
            <Text bold>{post_data[0].title}</Text>
            <Text bold>글쓴이: {post_data[0].nickname}</Text>
            <Text>작성시간: {post_data[0].createdAt}</Text>
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
          </Grid>
        <Grid margin="30px 0px 0px 0px">
          <ImageCard imagelist = {imgs}/>
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
                    size= "large"
                    onChange={(event, newValue) => {
                    setstar(newValue);
                    }}
                />
              </div>
            </Text>
            <div className="favorite_icon">
            <Text margin="0px" bold>
              좋아요 {post_data.good}개
            </Text>
            <Stack direction="row" spacing={1}>
                {heart_state === true ? 
                    <IconButton aria-label="Favorite" onClick={heart_click} >
                        <FavoriteIcon sx={{ fontSize: 50, color : pink[400] }}/>
                    </IconButton>
                    : 
                    <IconButton aria-label="FavoriteBorder" onClick={heart_click}>
                        <FavoriteBorderIcon sx={{ fontSize: 50, color : pink[400] }}/>
                    </IconButton>
                }
            </Stack>
            </div>
          </Grid>
          </Grid>

        <Grid padding="16px">
          <Text>{post_data.content}</Text>
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
