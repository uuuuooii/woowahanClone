/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/15/2022
  ==============================================================================
*/

import React, { FC, useState } from "react";
import { IntroduceItem } from "../../../container/main/introduce";
import * as I from "./styled";
import { SubContent, Titles } from "../../../commons/title";

const Introduce: FC = () => {
  const [num, setNum] = useState<any>();
  return (
    <>
      <I.Section>
        <I.Article>
          <I.TextBox>
            <Titles>
              우아한형제들이 <I.Br />
              일하는 이야기
            </Titles>
            <SubContent>
              평범한 사람들이 모여 비범한 성과를 만들어 내도록
            </SubContent>
          </I.TextBox>

          <I.SlideBox>
            {IntroduceItem.map((item) => {
              return (
                <I.SlideWrap key={item.id}>
                  <I.Slide>
                    <I.Picture>
                      <I.Img
                        className={item.id % 2 === 0 ? "" : "active"}
                        src={item.images}
                        alt="image"
                      />
                    </I.Picture>
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
