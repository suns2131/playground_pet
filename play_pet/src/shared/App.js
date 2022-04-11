import React from "react";
import {history} from "../redux/ConfigStore";

import Post from "../components/Post";
import PostList from "../container/PostList";
import Button from "../elements/Button";

import { BrowserRouter, Route } from "react-router-dom";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
        <Button is_float text="+" _onClick={() => {history.push("/write");}} ></Button>
      </BrowserRouter>
    </>
  );
}

export default App;
