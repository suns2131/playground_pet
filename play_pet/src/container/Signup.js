import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Headers from "../shared/Headers";

const theme = createTheme();

const Signup = () => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [pwd_check, setPwdCheck] = React.useState("");
    const [user_name, setUserName] = React.useState("");

    const signup = () => {
        if (id === "" || pwd === "" || user_name === "") {
        alert('공백을 입력하지 말아주세요');
        return;
        }
        if (pwd !== pwd_check) {
          alert('비밀번호확인값과 비밀번호가 일치하지 않습니다');
        return;
        }
        let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if(exptext.test(id)==false){
          alert("이메일형식이 올바르지 않습니다.");
          return;
        }

        dispatch(userActions.signupFB(id, pwd, user_name));
    };
    return (
        <React.Fragment>
            <Headers />
        <ThemeProvider theme={theme}>
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
                회원가입
              </Typography>
              <Box noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="email"
                      placeholder="이메일을 입력해주세요."
                      onChange={(e) => {
                        setId(e.target.value);
                      }}
                    />
                  </Grid>
  
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      placeholder="닉네임을 입력해주세요."
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </Grid>
  
                  <Grid item xs={12}>
                    <TextField
                    type="password"
                      required
                      fullWidth
                      label="비밀번호"
                      placeholder="비밀번호를 입력해주세요."
                      onChange={(e) => {
                        setPwd(e.target.value);
                      }}
                    />
                  </Grid>
  
                  <Grid item xs={12}>
                    <TextField
                    type="password"
                      required
                      fullWidth
                      label="비밀번호 확인"
                      placeholder="비밀번호를 다시 입력해주세요."
                      onChange={(e) => {
                        setPwdCheck(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={signup}
                >
                  회원가입
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
}

export default Signup