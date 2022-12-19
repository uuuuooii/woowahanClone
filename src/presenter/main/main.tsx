/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/

import React, { FC } from "react";
import Visual from "../visual/index";
import Introduce from "../Introduce/index";
import VideoLine from "../videoLine/index";
import ImgLine from "../season/index";
import News from "../news/index";
import MainFont from "../mainFont/index";

const Main: FC = () => {
  return (
    <>
      <Visual />
      <Introduce />
      <VideoLine />
      <ImgLine />
      <News />
      <MainFont />
    </>
  );
};

export default Main;
