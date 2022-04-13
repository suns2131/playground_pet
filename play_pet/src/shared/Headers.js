import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/ConfigStore";

import{getCookie, deleteCookie} from '../shared/Cookie'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// import Permit from '../shared/Permit'
const Headers = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user?.is_login);
  const is_session = sessionStorage.getItem("user_id") ? true : false;

  if (is_session) {
    return (
      <React.Fragment>
       <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar >
            <Typography variant="h6" component="div"   onClick={() => {
              history.push("/");
            }} sx={{ flexGrow: 1 }}>
              강아지 운동장
            </Typography>
            <Button color="inherit" onClick={() => {
              history.push("/post");
            }}>게시글 작성</Button>
            <Button color="inherit" onClick={() => {
              dispatch(userActions.logoutFB({}))
            }}>로그아웃</Button>
          </Toolbar>
        </AppBar>
      </Box>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar >
            <Typography variant="h6" component="div"   onClick={() => {
              history.push("/");
            }} sx={{ flexGrow: 1 }}>
              강아지 운동장
            </Typography>
            <Button color="inherit" onClick={() => {
              history.push("/");
            }}>로그인</Button>
            <Button color="inherit" onClick={() => {
              history.push("/signup");
            }}>회원가입</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

Headers.defaultProps = {};

export default Headers;