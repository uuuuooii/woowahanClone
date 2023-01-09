/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/22/2022
  ==============================================================================
*/
import styled from "@emotion/styled";

const Section = styled.section`
  min-height: calc(100vh - 363px);
`;

const ArticleTitle = styled.article`
  padding-top: 50px;
`;

const MainTitleBox = styled.div`
  margin: 80px auto;
  margin-bottom: 20px;
`;

const MainTitle = styled.h3`
  text-align: center;
  color: #232324;
  font-size: 2.625rem;
  font-weight: 700;
  line-height: 1.5238095238;
  @media (max-width: 750px) {
    font-size: 30px;
  }
`;
const InputBox = styled.div`
  width: 400px;
  margin: 0 auto 100px;
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const Input = styled.input`
  position: relative;
  padding: 0 180px 0 0;
  font-size: 1.25rem;
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
  @media (max-width: 750px) {
    padding: 0 90px 0 0;
  }
`;

//제작 아이콘
const SearchGlasses = styled.span`
  position: absolute;
  max-width: 100%;
  margin-left: 400px;
  z-index: 1;
  cursor: pointer;
  @media (max-width: 750px) {
    margin-left: 310px;
  }
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
  font-size: 1.25rem;
  font-weight: 700;
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
  //전체 기사 옆 공간 만들기
  max-width: 1020px;
  margin: 0 auto 60px;
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
    max-width: 1020px;
  }
  &.fact {
  }
`;

const Img = styled.img`
  width: 260px;
  height: 208px;
  margin-right: 40px;
  object-fit: cover;
  @media (max-width: 750px) {
    width: 100px;
    height: 80px;
    margin-right: 16px;
  }
`;
const NewsItemBox = styled.div`
  @media (max-width: 750px) {
    max-height: 52px;
    width: 500px;
  }
  &.press {
  }
`;

const NewsItemTitle = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6;
  word-break: keep-all;
  @media (max-width: 750px) {
    margin-bottom: 5px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.625;
  }
  &.press {
  }
`;

const NewsSubTitle = styled.span`
  margin: 10px 0 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625;
  &.press {
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; //2줄 이상 안 보이게
    -webkit-box-orient: vertical;
  }
  &.fact {
    display: block;
    @media (min-width: 750px) {
    }
  }
`;

const Time = styled.time`
  display: block;
  font-size: 0.875rem;
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
  font-size: 1rem;
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
  font-size: 1rem;
`;

const ButtonRound = styled.span`
  cursor: pointer;
`;

const PaginationButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 0 auto;
  text-align: center;
  color: #232324;
  font-size: 1rem;
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
  ArticleTitle,
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
  NewsItemBox,
  NewsItemTitle,
  NewsSubTitle,
  Time,
  Button,
  PagenationBox,
  PaginationArrowButton,
  ButtonRound,
  PaginationButton,
};
