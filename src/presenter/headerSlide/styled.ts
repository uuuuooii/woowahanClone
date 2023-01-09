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
  padding: 10px 24px;
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
  margin: 40px 10px;
  border: solid;
  border-width: 2px 0 0 2px;
  transform: rotate(45deg);
  cursor: pointer;
`;

const UnderArrow = styled.button`
  width: 6px;
  height: 6px;
  margin: 40px 10px;
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

const SubNav = styled.nav`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding: 40px 24px;
  font-size: 16px;
  border-top: 1px solid #ebeef2;
`;

const SubNavItem = styled.li`
  display: inline;
  height: 44px;
  &:nth-child(odd) {
    .first {
      font-weight: 700;
    }
    float: left;
    clear: left;
    margin-right: 24px;
  }

  &:nth-child(even) {
    .first {
      font-weight: 700;
      margin-right: 18px;
    }
    float: right;
    clear: right;
    margin-left: 24px;
  }
`;

const SubNavLink = styled.a``;

const SubNavFootBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubNavFootItem = styled.li`
  display: inline;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 700;
  :first-child {
    margin-right: -14px;
  }
  .foot {
    color: #a6a7a9;
  }
  .line {
    &::after {
      width: 1px;
      height: 10px;
      content: "";
      top: 50%;
      left: 0;
      display: inline-block;
      background-color: #d6d7da;
      margin-left: 19px;
    }
  }
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
  SubNav,
  SubNavItem,
  SubNavLink,
  SubNavFootBox,
  SubNavFootItem,
};
