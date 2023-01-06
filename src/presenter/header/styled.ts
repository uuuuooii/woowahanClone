/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/12/2022
  ==============================================================================
*/ // 객체의 노출여부와 표현방식
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

const Header = styled.header``;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  position: fixed;
  width: 100%;
  height: 72px;
  z-index: 4;
  background: white;
`;

const MainNav = styled.nav<{ active: boolean }>`
  margin: 0 auto;
  @media screen and (max-width: 980px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    padding: 10px 0px;
    opacity: 1;
    visibility: ${(props) => (props.active ? "visible" : "")};
    transform: ${(props) =>
      props.active ? "transformX(100%)" : "translateX(100%)"};
    transition: 0.7s;
    background: white;
  }
`;
const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  display: block;
  margin: 0 17px;

  @media screen and (max-width: 980px) {
    display: block;
  }
`;

const SubList = styled.ul<{ dropDown: boolean }>`
  position: absolute;
  width: 100%;
  top: 72px;
  left: 0;
`;

const SubItem = styled.li<{ dropDown: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  visibility: ${(props) => (props.dropDown ? "visible" : "hidden")};
  transform: ${(props) =>
    props.dropDown ? "transformY(0%)" : "translateY(-10%)"};
  transition: 0.3s;
  background: white;
  color: black;
  padding-right: 70px;
`;

const SubItemLink = styled.a`
  margin: 0 15px;
  color: #d6d7da;
  font-size: 16px;
  line-height: 1.6;
  &:hover {
    color: #232324;
    font-weight: 700;
  }
`;

const RedLink = styled.a`
  padding: 50px;
`;
const SubNav = styled(MainNav)``;

const SubListMenu = styled.a`
  padding: 0 12px;
  font-size: 12px;

  @media screen and (max-width: 980px) {
    opacity: 0;
  }
`;

const SubListMenuKo = styled(SubListMenu)`
  font-weight: 700;
`;
const SubListMenuEn = styled.a`
  font-size: 12px;
  font-weight: 700;
  margin-left: -5px;
  color: #d6d7da;
  &::before {
    content: "";
    top: 50%;
    right: 0;
    display: inline-block;
    width: 1px;
    height: 10px;
    background-color: #d6d7da;
    margin-right: 10px;
  }
  @media screen and (max-width: 980px) {
    opacity: 0;
  }
`;

const ArrowIcon = styled.button`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    top: -8px;
    left: 7px;
    border-top: 1px solid #121212;
    border-right: 1px solid #121212;
    transform: rotate(5deg); /* 각도 */
  }
`;

const ArrowRight = styled.button`
  position: absolute;
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-right: 1px solid #121212; /* 선 두께 */
    transform: rotate(45deg); /* 각도 */
  }
`;

// 제작 아이콘
const BurgerIcon = styled.button`
  display: none;
  position: relative;
  background-color: black;
  width: 20px;
  height: 2px;
  margin: 0 25px;
  cursor: pointer;

  &::before,
  &::after {
    background: black;
    width: 20px;
    height: 2px;
    position: absolute;
    content: "";
  }

  &::before {
    top: -5px;
  }
  &::after {
    top: -10px;
  }
  @media screen and (max-width: 980px) {
    display: block;
  }
`;

const CloseIcon = styled(BurgerIcon)`
  position: relative;
  width: 50px;
  height: 2px;
  background-color: white;
  margin: 0 10px;

  &::before {
    top: -5px;
    left: 10px;
    transform: rotate(45deg);
  }
  &::after {
    top: -5px;
    left: 10px;
    transform: rotate(-45deg);
  }
`;

export {
  Header,
  HeaderNav,
  MainNav,
  List,
  ListItem,
  SubList,
  SubItem,
  RedLink,
  SubNav,
  SubListMenu,
  SubListMenuEn,
  SubListMenuKo,
  ArrowIcon,
  ArrowRight,
  BurgerIcon,
  CloseIcon,
  SubItemLink,
};
