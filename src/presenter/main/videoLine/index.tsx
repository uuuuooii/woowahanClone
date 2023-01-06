/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/
import React, { FC } from "react";
import { SubContent, Titles } from "../../../commons/title";
import * as V from "./styled";

const VideoLine: FC = () => {
  return (
    <section>
      <V.Article>
        <V.TextBox>
          <Titles>
            '문 앞으로 배달되는
            <V.Br /> 일상의 행복'이라는
            <V.Br /> 비전으로
          </Titles>
          <SubContent>
            우아한형제들은 배달이 일상을 조금 더<V.Br /> 행복하게 하도록 오늘도
            달리고 있어요
          </SubContent>
        </V.TextBox>
        <div>
          <V.Video autoPlay controls loop>
            <source
              src="https://woowahan-cdn.woowahan.com/static/media/main_service.878a686a.mp4"
              type="video/mp4"
            />
          </V.Video>
        </div>
        <Titles>
          오늘이
          <V.Br /> 전설이 될 수 있도록
          <SubContent>
            세계 진출, 배민로봇 개발, 인공지능을 연구하며 우아한형제들은 미래를
            더 가깝게 만들고 있어요.
          </SubContent>
        </Titles>
      </V.Article>
    </section>
  );
};

export default VideoLine;
