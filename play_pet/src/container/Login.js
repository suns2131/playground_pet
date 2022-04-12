import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import queryString from "query-string"
import { KAKAO_AUTH_URL } from "../componets/Kakao_auth";
import {actionCreators as LoginActions} from '../redux/modules/Login_module'

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const query = queryString.parse(window.location.search);

    React.useEffect(() => {
        if(query.code){
            console.log(query.code.toString());
        }
    },[])

    const kakao_login = () => {
        dispatch(LoginActions.getLogin_kakao(''));
    }

    return (
        <div>
            <h1>로그인화면입니다.</h1>
            <input type="text" />
            <input type="password"/>
            <button onClick={() => {
                history.push('/list')
            }}>로그인</button>
            <button onClick={() => {
                history.push('/Signup')
            }}>회원가입</button>
               <div>
                <a href={KAKAO_AUTH_URL}>
                    <div className="kakao_btn" >
                        <img src="../images/kakao_login_medium_narrow.png"/>
                    </div>
               </a>
               </div>
        </div>
    );
}

const Kakao_design = styled.div`
    .kakao_btn{
        /* background-color: red; */
        background-repeat: no-repeat;
        background-size : cover;
        margin: 10px auto;
        color: transparent;
        width: 600px;
        height: 80px;
    }
`;

export default Login