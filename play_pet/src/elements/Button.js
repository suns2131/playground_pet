import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float1, is_float2, children, margin, width, padding, bg } = props;

  if (is_float1) {
    return (
      <React.Fragment>
        <FloatButtonRight onClick={_onClick}>{text ? text : children}</FloatButtonRight>
      </React.Fragment>
    );
  }

  if (is_float2) {
    return (
      <React.Fragment>
        <FloatButtonLeft onClick={_onClick}>{text ? text : children}</FloatButtonLeft>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    bg: bg,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
  bg: false,
};


const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
`;

const FloatButtonRight = styled.button`
  width: 50px;
  height: 50px;
  background-color: skyblue;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 500px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

const FloatButtonLeft = styled.button`
  width: 50px;
  height: 50px;
  background-color: skyblue;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 500px;
  right: 730px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;
export default Button;
