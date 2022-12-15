/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/15/2022
  ==============================================================================
*/

import React from "react";
import { IntroduceItem } from "../../presenter/main/introduce";
import * as I from "./styled";
import { SubContent, Titles } from "../title/title";

const onMouseEnter = () => {
  //   Animation.pause();
};

const Introduce = () => {
  return (
    <>
      <I.Section>
        <I.Article>
          <Titles>
            우아한형제들이 일하는 이야기
            <SubContent>
              평범한 사람들이 모여 비범한 성과를 만들어 내도록
            </SubContent>
          </Titles>

          <I.SlideBox>
            {IntroduceItem.map((item) => {
              return (
                <I.SlideWrap>
                  <I.Slide>
                    <I.Img
                      //   onMouseLeave={() => setDropDown(false)}
                      //   onMouseEnter={() => onHandleNav("company")}
                      src={item.images}
                      alt="image"
                    />
                    <I.SlideItem>{item.title}</I.SlideItem>
                  </I.Slide>
                </I.SlideWrap>
              );
            })}
          </I.SlideBox>
        </I.Article>
      </I.Section>
    </>
  );
};

export default Introduce;
