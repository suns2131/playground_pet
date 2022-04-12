import React from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const history = useHistory();
    return (
        <div>
            <h1>회원가입화면입니다.</h1>
            <button onClick={() => {
                history.push('/');
            }}>회원가입</button>
            
        </div>
    );
}

export default Signup