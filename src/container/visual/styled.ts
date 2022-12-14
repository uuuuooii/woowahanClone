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

const Article = styled.article`
  display: flex;
  left: 0;
  transform: transform 0.5s;
  overflow: hidden;
`;

const Picture = styled.picture<{ currentSlide: number }>`
  width: 100%;
  opacity: ${(props) => (props.currentSlide ? "1" : "1")};
  transform: ${(props) =>
    props.currentSlide ? "translateX(-0%)" : "translateX(0)"};
  transition: all 1s ease;
`;

export { Article, Picture };
