/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/14/2022
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

const Article = styled.article`
  padding: 0 40px;
`;

const Box = styled.div``;

const List = styled.ul`
  padding: 40px 0 0 0;
`;

const Item = styled.li`
  height: 74px;
`;
const Title = styled.strong`
  height: 74px;
  font-size: 24px;
  font-weight: 700;
`;

const Arrow = styled.button`
  width: 5px;
  height: 5px;

  border: solid;
  border-width: 1px 0 0 1px;
  transform: rotate(45deg);
`;

export { Article, Box, List, Title, Item, Arrow };
