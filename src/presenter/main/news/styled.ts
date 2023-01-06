/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/

import styled from "@emotion/styled";

const Section = styled.section`
  max-width: 820px;
  padding: 100px 0;
  margin: 0 auto;
`;

const NewsWrap = styled.a``;

const Article = styled.article`
  margin-bottom: 20px;
`;
const List = styled.ul``;
const Item = styled.li`
  display: flex;
  padding: 40px 20px;
  border-bottom: 1px solid #f3f4f5;
  cursor: pointer;
  &:hover {
    background-color: rgba(243, 244, 245, 0.5);
  }
`;

const Picture = styled.picture`
  margin-right: 40px;
  @media (max-width: 750px) {
    margin-right: 16px;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 160px;
  @media (max-width: 750px) {
    width: 100px;
    height: 80px;
  }
`;
const Title = styled.p`
  max-height: 64px;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6;
  word-break: keep-all;
  @media (max-width: 750px) {
    font-size: 16px;
  }
`;

const Time = styled.time`
  display: block;
  color: #a6a7a9;
  font-size: 0.875rem;
  font-weight: 400;
  padding-top: 10px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47px;
  height: 52px;
  margin: 40px auto 0;
  cursor: pointer;
  padding: 0 22px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.75;
  border-radius: 8px;
  background-color: #f3f4f5;
`;

export {
  Section,
  NewsWrap,
  Article,
  List,
  Item,
  Picture,
  Img,
  Title,
  Time,
  Link,
};
