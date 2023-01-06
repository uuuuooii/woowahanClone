/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/

import styled from "@emotion/styled";

const Article = styled.article`
  padding: 80px 0;
`;

const TextBox = styled.div`
  margin-bottom: 60px;
`;
const Br = styled.br`
  @media (min-width: 475px) {
    display: inline-block;
    content: " ";
    line-height: 1.75;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.5;
  padding-top: 160px;
`;
const Small = styled.small`
  display: block;
  padding-top: 20px;
  font-size: 1rem;
  font-weight: 400;
`;

const Video = styled.video`
  display: block;
  max-width: 100%;
  width: 780px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 80px;
`;

export { Article, TextBox, Br, Title, Small, Video };
