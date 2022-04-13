import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Headers from "../shared/Headers";
import Container from '@mui/material/Container';

const PostDetail = (props) => {
    const data =props.match.params.postid;
    console.log(data)
    return (
        <React.Fragment>
            <Headers />
            <Container >
                <Post/>
                <CommentWrite postid = {data}/>
                <CommentList postid = {data}/>
            </Container>
            
        </React.Fragment>
    );
};

export default PostDetail;