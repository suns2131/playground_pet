import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCard = (props) => {
    const itemarray = props.imagelist;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Card_style>
      <div className="img_container">
        <Slider {...settings}>
          {itemarray.map((el) => {
            return (
              <div className="img_div">
                <img src={el}/>
              </div>
            );
          })}
        </Slider>
      </div>
      </Card_style>
    );
}

const Card_style = styled.div`
  .img_container{
    width: 100%;
  }
  .img_div{
    background-color: red;
  }
  img{
    object-fit:cover;
    width : 100%;
    height: 100%;

  }
`;
export default ImageCard;