import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { useLocation } from "react-router";

const Name = ({ history }) => {
  const [nickname, setNickName] = React.useState("");

  const location = useLocation();
  // const nickname = location.state.nickname;
  const username = location.state.username;
  console.log(username, nickname);

  const dispatch = useDispatch();
  const change = () => {
    dispatch(userActions.change(username, nickname));
    history.push('/');
  };

  return (
    <React.Fragment>
      <h1>닉네임을 입력하세요.</h1>
      <TextField
        id="standard-basic"
        variant="standard"
        onChange={(e) => {
          setNickName(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={change}
      >
        입력
      </Button>
    </React.Fragment>
  );
};

export default Name;
