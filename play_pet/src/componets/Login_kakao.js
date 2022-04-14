import React from "react";
import { useDispatch } from "react-redux";
import {actionCreators as LoginActions} from '../redux/modules/Login_module'
const Login_Kakao = (props) => {
    const dispatch = useDispatch();
    const code = new URL(window.location.href).searchParams.get("code");
    
    // React.useEffect(() => {
    //     if(code)
    //     {
    //         console.log('카카오계정있어요!')
    //         dispatch(LoginActions.getLogin_kakao(code));
            
    //     }
        
    // },[])

    React.useEffect(() => {
         dispatch(LoginActions.GetLogin_kakao(code));
      }, []);

    return(
        <div>
            카카오 로그인중입니다.
        </div>
    );
}

export default Login_Kakao;