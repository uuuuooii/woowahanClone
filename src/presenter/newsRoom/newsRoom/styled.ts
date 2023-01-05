/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/22/2022
  ==============================================================================
*/
import styled from "@emotion/styled";

const Section = styled.section`
  padding-top: 50px;
`;

const MainTitleBox = styled.div`
  margin: 80px auto;
  margin-bottom: 20px;
`;

const MainTitle = styled.h3`
  text-align: center;
  color: #232324;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.5238095238;
`;
const InputBox = styled.div`
  width: 400px;
  margin: 0 auto 100px;
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 0 25px 0 0;
  font-size: 20px;
  line-height: 1.6;
  border-width: 0 0 1px 0;
  border-color: #232324;
  border-radius: 0;
  background-color: white;
  color: black;
  ::placeholder {
    font-family: "woowahan";
    color: #d6d7da;
  }
`;

//제작 아이콘
const SearchGlasses = styled.span`
  position: absolute;
  margin-left: 400px;
  z-index: 1;
  cursor: pointer;
`;

const SearchGlassesCircle = styled.button`
  width: 8px;
  height: 8px;
  border: 2px solid black;
  border-radius: 50%;
`;
const SearchGlassesLine = styled.button`
  width: 4px;
  border: 1px solid black;
  border-radius: 1px;
  transform: translate3d(-3px, 3px, 0) rotate(45deg);
`;

const Article = styled.article`
  position: relative;
  font-size: 20px;
  font-weight: 700;
  /* max-width: 1020px;
  margin: 0 auto 60px; */
`;

const NewsTitleBox = styled.div`
  text-align: center;
`;

const Title = styled.a<{ active: boolean }>`
  padding: 0 10px;
  color: ${({ active }) => (active ? "#232324" : "#d6d7da")};
  border-width: 0 0 0 1px;
  cursor: pointer;
  &::before {
    content: "";
    top: 50%;
    right: 0;
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: #d6d7da;
    margin-right: 20px;
  }
  //첫 번째 요소 지우기
  &:first-child::before {
    content: none;
  }
`;

//hr색상 주기
const Line = styled.hr`
  background: #d6d7da;
  margin-top: 20px;
  border: 0;
  height: 1px;
`;

const TitleBox = styled.div`
  margin: 100px 0 60px;
`;

const NewsListArticle = styled.article`
  display: flex;
  justify-content: center;
`;

const NewsList = styled.ul`
  padding-bottom: 160px;
`;

const Item = styled.li`
  cursor: pointer;
  &:hover {
    background-color: rgba(243, 244, 245, 0.5);
  }
`;

const Link = styled.a`
  display: flex;
  padding: 40px 20px;
  border-bottom: 1px solid #f3f4f5;
  &.press {
    /* padding: 80px 20px; */
    max-width: 1020px;
  }
  &.fact {
    /* padding: 80px 20px; */
    width: 1020px;
  }
`;

const Img = styled.img`
  width: 260px;
  height: 208px;
  margin-right: 40px;
  object-fit: cover;
`;

const NewsItemTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6;
  word-break: keep-all;

  &.press {
  }
`;

const NewsSubTitle = styled.span`
  margin: 10px 0 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.625;
  &.press {
    display: block;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; //2줄 이상 안 보이게
    -webkit-box-orient: vertical;
  }
  &.fact {
    display: block;
  }
`;

const Time = styled.time`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #a6a7a9;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  display: flex;
  height: 52px;
  margin: 60px auto 0;
  cursor: pointer;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 8px;
  background-color: #f3f4f5;
`;

const PagenationBox = styled.div`
  display: flex;

  justify-content: center;
  margin-top: 60px;
`;
const PaginationArrowButton = styled.button`
  margin: 0 30px;
  color: #232324;
  font-weight: 300;
  font-size: 16px;
`;

const ButtonRound = styled.button`
  cursor: pointer;
`;

const PaginationButton = styled.span`
  width: 32px;
  height: 32px;
  margin: 0 auto;
  text-align: center;
  color: #232324;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #ebeef2;
  }
`;
export {
  Section,
  MainTitleBox,
  MainTitle,
  InputBox,
  Input,
  SearchGlasses,
  SearchGlassesCircle,
  SearchGlassesLine,
  Article,
  NewsTitleBox,
  Title,
  TitleBox,
  Line,
  NewsList,
  NewsListArticle,
  Item,
  Link,
  Img,
  NewsItemTitle,
  NewsSubTitle,
  Time,
  Button,
  PagenationBox,
  PaginationArrowButton,
  ButtonRound,
  PaginationButton,
};
