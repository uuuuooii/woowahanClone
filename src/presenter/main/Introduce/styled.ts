/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/15/2022
  ==============================================================================
*/

// 객체의 노출여부와 표현방식
// display :
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

const Section = styled.section``;

const Article = styled.article`
  padding: 80px 0;
  overflow: hidden;
`;

const TextBox = styled.div`
  margin-bottom: 60px;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 60px;
`;

const Small = styled.small`
  text-align: center;
  display: block;
  padding-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;
`;

const SlideBox = styled.article`
  display: flex;
  height: 285px;
  animation: scroll 40s linear infinite;
  width: calc(500px * 10);
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-300px * 7));
    }
  }
  &:hover {
    animation-play-state: paused, running;
  }
`;

const SlideWrap = styled.a`
  display: flex;
  overflow: hidden;
`;

const Slide = styled.span``;
const Img = styled.img`
  width: 180px;
  height: 250px;
  padding: 0 10px;
  object-fit: cover;
  border-radius: 20px;
`;
const SlideItem = styled.p`
  height: 52px;
  margin: 10px 0px 0px 0px;
  color: block;
  font-size: 16px;
  font-weight: 700;
`;

export {
  Section,
  Article,
  TextBox,
  Title,
  Small,
  SlideBox,
  SlideWrap,
  Slide,
  Img,
  SlideItem,
};
