import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Headers from "../shared/Headers";
import { KAKAO_AUTH_URL } from "../componets/Kakao_auth";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 또는 비밀번호가 비어있습니다! 입력해주세요");
      return;
    }
    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Headers/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              로그인
            </Typography>
             <a href={KAKAO_AUTH_URL}>
                    <div className="kakao_btn" >
                        <img src="../images/kakao_login_medium_wide.png"/>
                    </div>
            </a>
            <Typography component="h1" variant="h5">
              또는
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="ID"
                autoFocus
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => {
                  login(e);
                }}
              >
                로그인
              </Button>
            </Box>
          </Box>
        </Container>
    </React.Fragment>
  );
};

export default Login;