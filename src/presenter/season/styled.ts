/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/

import styled from "@emotion/styled";

const Section = styled.section`
  position: relative;
  height: 680px;
  min-height: 100%;
  margin: 80px 0;
  text-align: center;
  background-attachment: fixed;
  background-image: url("/images/img_season_1_bg.jpeg");
  background-position: 50% 50%;
  background-size: cover;
`;

const Article = styled.article``;

const Img = styled.img`
  text-align: center;
  width: 120px;
  height: 40px;
`;

const SeasonImgBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SeasonTextBox = styled.div`
  color: white;
  margin: 20px 0;
`;

const Strong = styled.strong`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;
`;

export { Section, Article, SeasonImgBox, Img, SeasonTextBox, Strong, Desc };
