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

const Article = styled.article``;

const List = styled.ul`
  padding: 10px 40px;
`;

const Item = styled.li`
  min-height: 74px;
`;
const Title = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 74px;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

//제작 아이콘
const Arrow = styled.button`
  width: 6px;
  height: 6px;
  margin-top: 40px;
  border: solid;
  border-width: 2px 0 0 2px;
  transform: rotate(45deg);
  cursor: pointer;
`;

const UnderArrow = styled.button`
  width: 6px;
  height: 6px;
  margin-top: 40px;
  border: solid;
  border-width: 2px 0 0 2px;
  transform: rotate(220deg);
  cursor: pointer;
`;

const DropDownItem = styled.ul<{ dropDown: boolean }>`
  margin-left: 24px;
  visibility: ${(dropDown) => (dropDown ? "visible" : "hidden")};
  transform: ${(dropDown) =>
    dropDown ? "transformY(0%)" : "translateY(-10%)"};
  transition: 0.3s;
  background: white;
  color: black;
`;

const DropDownList = styled.li<{ dropDown: boolean }>``;

const SubTitle = styled.a`
  display: block;
  margin-bottom: 16px;
  font-size: 1.063rem;
  line-height: 1.75;
  color: #6c6d6f;
`;

export {
  Article,
  List,
  Title,
  ItemBox,
  Item,
  Arrow,
  UnderArrow,
  DropDownItem,
  DropDownList,
  SubTitle,
};
