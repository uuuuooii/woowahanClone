/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/22/2022
  ==============================================================================
*/
import styled from "@emotion/styled";

const Article = styled.article`
  position: relative;
  height: 40px;
  font-size: 20px;
  font-weight: 700;
  max-width: 1020px;
  margin: 0 auto 60px;
`;

const NewsBox = styled.li`
  display: flex;
  justify-content: center;
`;

const NewsTitleBox = styled.div`
  text-align: center;
`;
const Title = styled.a`
  padding: 0 20px;
  color: #d6d7da;
  &.active {
    color: #232324;
  }
  border-width: 0 0 0 1px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    opacity: 0.05;
  }
  /* &:hover {
    color: #232324;
  } */
`;

const TitleBox = styled.div`
  margin: 100px 0 60px;
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
`;

const Picture = styled.picture``;

const Img = styled.img`
  width: 260px;
  height: 208px;
  margin-right: 40px;
  object-fit: cover;
`;

const NewsItemTitle = styled.p`
  max-height: 64px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6;
  word-break: keep-all;
`;

const NewsSubTitle = styled.span`
  margin: 10px 0 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.625;
`;

const Time = styled.time`
  display: block;
  font-size: 14px;
  font-weight: 400;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  margin: 60px auto 0;
  cursor: pointer;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.75;
  border-radius: 8px;
  background-color: #f3f4f5;
`;
export {
  Article,
  NewsBox,
  NewsTitleBox,
  Title,
  TitleBox,
  NewsList,
  Item,
  Link,
  Picture,
  Img,
  NewsItemTitle,
  NewsSubTitle,
  Time,
  Button,
};
