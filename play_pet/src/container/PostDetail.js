import React, { useEffect } from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Headers from "../shared/Headers";
import Container from '@mui/material/Container';
import {actionCreators as PostActions} from '../redux/modules/Post_savestate'
import { useDispatch, useSelector } from "react-redux";

const PostDetail = (props) => {
    const dispatch = useDispatch();
    const data =props.match.params.postid;
    const post_data = useSelector((state) => state.post.list);
    console.log('post_dat');
    console.log(post_data);

    useEffect(() => {
        console.log('useEffect')
        dispatch(PostActions.getPostID(data));
    },[])

    return (
        <React.Fragment>
            <Headers />
            <Container >
                <Post post_data = {post_data[0]}/>
                <CommentWrite postid = {data}/>
                <CommentList postid = {data}/>
                <button onClick={()=> {dispatch(PostActions.deletePostTS(data));}}>삭제</button>
                <button onClick={()=> {dispatch(PostActions.updatePostTS(data));}}>수정</button>
            </Container>
            
        </React.Fragment>
    );
};

export default PostDetail;
