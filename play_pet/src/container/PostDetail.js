import React, { useEffect } from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Headers from "../shared/Headers";
import Container from '@mui/material/Container';
import {actionCreators as PostActions} from '../redux/modules/Post_savestate'
import { useDispatch, useSelector } from "react-redux";

const PostDetail = (props) => {
    const data =props.match.params.postid;
    const dispatch = useDispatch();
    const post_data = useSelector((state) => state.post.list);
    console.log(post_data);
    
    console.log(data)

    useEffect(() => {
        dispatch(PostActions.getPostID(data));
    },[])

    return (
        <React.Fragment>
            <Headers />
            <Container >
                <Post post_data = {post_data}/>
                <CommentWrite postid = {data}/>
                <CommentList postid = {data}/>
            </Container>
            
        </React.Fragment>
    );
};

export default PostDetail;
