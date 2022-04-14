import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  // Post elements들을 Grid안에 감싸줬기 때문에 Post elements을 children으로 받아옴
  const { is_flex, width, padding, margin, bg, children, center, _onClick } =
    props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "80%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default Grid;
