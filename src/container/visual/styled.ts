/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/15/2022
  ==============================================================================
*/ // display :
// list-style :

// 위치와 좌표
// position :
// float :
// clear :

// 크기와 여백
// width :
// height :
// padding :
// margin :

// 윤곽과 배경
// background :
// border :

// 글자와 정렬
// color :
// font :
// text-decoration :
// text-align :
// vertical-align :
// white-space :

// 내용
// content :

import styled from "@emotion/styled";

const Slider = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Box = styled.div`
  &.slide {
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    transform: translateX(50%);
    transition: all 0.5s ease;
  }
  &.current {
    transform: translateX(0);
  }
`;

const Picture = styled.picture<{ currentSlide: number }>`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* transform: ${(props) =>
    props.currentSlide ? "translateX(-0%)" : "translateX(0)"}; */

  transition: all 1s ease;
  @media screen and (min-width: 600px) {
    max-width: 100%;
    height: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 750px;
  height: 300px;
  color: white;
`;

const Title = styled.h2`
  font-size: 30px;
`;

const Desc = styled.p`
  display: block;
  margin: 90px 90px;
  font-size: 100px;
  font-weight: 900;
  text-align: center;
`;

const Button = styled.button`
  font-size: 30px;
`;

export { Slider, Box, Picture, Img, Content, Title, Desc, Button };
