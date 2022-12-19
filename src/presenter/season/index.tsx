/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/
import React, { FC } from "react";
import * as I from "./styled";

const ImgLine: FC = () => {
  return (
    <I.Section>
      <I.Article>
        <a>
          <I.SeasonImgBox>
            <p>
              <I.Img src="/images/icon.png" alt="icon" />
            </p>
            <I.SeasonTextBox>
              <I.Strong>
                잘 먹겠습니다 <br />잘 버리겠습니다
              </I.Strong>
              <p>
                <img
                  src="/images/img_season_1_character_docgo.png"
                  alt="character"
                />
              </p>
              <I.Desc>
                지구에게 건네는 작지만 큰 인사 <br />
                배달의민족과 함께 지구에게 인사를 건네 볼까요?
              </I.Desc>
            </I.SeasonTextBox>
          </I.SeasonImgBox>
        </a>
      </I.Article>
    </I.Section>
  );
};

export default ImgLine;
