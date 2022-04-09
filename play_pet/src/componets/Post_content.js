import React, { useRef, useState } from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import {actionCreators as PostActions} from '../redux/modules/Post_savestate'


const Post_content = () => {
    //state 관리
    const [title,settitle] = useState('');
    const [star,setstar] = useState(0);
    const [wirte,setwrite] = useState(null);
    const [image_src1,setimage_src1] = useState(null);
    const [image_src2,setimage_src2] = useState(null);
    const [image_src3,setimage_src3] = useState(null);
    const [image_src4,setimage_src4] = useState(null);
    const [image_src5,setimage_src5] = useState(null);
    const [image_src6,setimage_src6] = useState(null);
    const history = useHistory();
    const data = useSelector((state) => state.post.list);
    const dispatch = useDispatch();

    //input ref 관리
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);
    const image4 = useRef(null);
    const image5 = useRef(null);
    const image6 = useRef(null);

    //Event 
    const change_title = (e) => {
        settitle(e.target.value);
    }

    const image_upload = (e,image_num) => {
        console.log(e)
        console.log(image_num)
        console.log('image'+(image_num))

        switch(image_num)
        {
            case 1:
              image1.current.click();
              break;
            case 2:
              image2.current.click();
              break;
            case 3:
              image3.current.click();
              break;
            case 4:
              image4.current.click();
              break;
            case 5:
              image5.current.click();
              break;              
            case 6:
              image6.current.click();
              break;
        }
    }

    const file_change = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onloadend = () => {
          if(!image_src1)
            setimage_src1(reader.result);
          else if(!image_src2)
            setimage_src2(reader.result);
          else if(!image_src3)
            setimage_src3(reader.result);
          else if(!image_src4)
            setimage_src4(reader.result);
          else if(!image_src5)
            setimage_src5(reader.result);
          else if(!image_src6)
            setimage_src6(reader.result);
        }
      }
    
    const posting_shot = () => {
        const post_data = {
            title : title,
            imageSrc1 : image_src1,
            imageSrc2 : image_src2,
            imageSrc3 : image_src3,
            imageSrc4 : image_src4,
            imageSrc5 : image_src5,
            imageSrc6 : image_src6,
            star : star,
            content : wirte,
        }
        console.log(post_data);
    }

    return (
    <div>
        <Head_design>
            <div className="title_container">
                <TextField id="standard-basic" label="이름" variant="standard" value={title} onChange ={change_title} />
            </div>
        </Head_design>
        <Image_design>
         <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={4} key={1}>
                <div className="items" onClick={(e) => {image_upload(e,1)}} >
                    <input type ="file" ref={image1} onChange = {file_change}/> 
                    <img src={image_src1}/>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={2}>
                <div className="items" onClick={(e) => {image_upload(e,2)}} >
                    <input type ="file" ref={image2} onChange = {file_change}/> 
                    <img src={image_src2}/>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={3}>
                <div className="items" onClick={(e) => {image_upload(e,3)}}>
                    <input type ="file" ref={image3} onChange = {file_change}/> 
                    <img src={image_src3}/>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={4}>
                <div className="items" onClick={(e) => {image_upload(e,(4))}}>
                    <input type ="file" ref={image4} onChange = {file_change}/> 
                    <img src={image_src4}/>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={5}>
                <div className="items" onClick={(e) => {image_upload(e,5)}}>
                    <input type ="file" ref={image5} onChange = {file_change}/> 
                    <img src={image_src5}/>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={6}>
                <div className="items" onClick={(e) => {image_upload(e,(6))}}>
                    <input type ="file" ref={image6} onChange = {file_change}/> 
                    <img src={image_src6}/>
                </div>
              </Grid>
          </Grid>
        </Box>
       </Image_design>
       <Star_design>
        <div className="star_container">
            <div>
                <Typography component="legend">별점</Typography>
                <Rating
                    name="simple-controlled"
                    value={star}
                    size= "large"
                    onChange={(event, newValue) => {
                    setstar(newValue);
                    }}
                />
            </div>
      </div>
      </Star_design>
      <Writing_design>
        <div className="wirting_container">
            <TextField
            id="outlined-multiline-static"
            label="게시글"
            multiline
            fullWidth
            rows={10}
            value ={wirte}
            onChange = {(e) => {setwrite(e.target.value); data.wirte = e.target.value;}}
            />
        </div>
       </Writing_design>
       <Btn_design>
        <div className="btn_group">
            <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={posting_shot}>포스팅하기</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={() => {
                        history.goBack();
                    }}>뒤로가기</Button>
            </Stack>
        </div>
    </Btn_design>
    </div>
    );
}

const Head_design = styled.div`
    .title_container{
        padding: 12px;
        display: flex;
    }
`;

const Image_design = styled.div`
  .image_container{
    background-color: red;
  };

  .items {
    background-color: #eee;
    height: 200px;
  }
  .items > input {
    display: none;
  }
  .items > img {
    width: 100%;
    height: inherit;
    object-fit:cover;
  }
`
const Star_design = styled.div`
 .star_container{
   margin-top: 5px;
   display: flex;
 }`;

const Writing_design = styled.div`
.wirting_container{
  margin-top: 10px;
}
`;
const Btn_design = styled.div`
 .btn_group {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
 }`;

export default Post_content;