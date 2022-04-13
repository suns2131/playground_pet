import React from "react";
import { history } from "../redux/ConfigStore";
import styled from "styled-components";
import Post from "../components/Post";
import PostList from "../container/PostList";
import Button from "@mui/material/Button";
import Grid from "../elements/Grid";
// import Permit from "./Permit";
// import Button from "../elements/Button";

import { BrowserRouter, Route } from "react-router-dom";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import PostDetail from "../container/PostDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={PostDetail} />
        {/* <Permit> */}
        <BtnDiv margin="0px 20px 0px 500px">
          <Button variant="contained" component="span">
            후기 작성하기
          </Button>
          </BtnDiv>
        {/* </Permit> */}
      </BrowserRouter>
    </>
  );
}

const BtnDiv = styled.div`
  width: 120px;
  height: 50px;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 20px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default App;
