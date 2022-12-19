/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/

import React, { FC } from "react";
import { Titles } from "../../commons/title";
import { newsItem } from "../../container/main/news";
import * as N from "./styled";

const News: FC = () => {
  return (
    <N.Section>
      <N.NewsWrap>
        <N.Article>
          <Titles>
            빠르고 정확한
            <br />
            우아한형제들의 새 소식
          </Titles>
        </N.Article>
        <article>
          <N.List>
            {newsItem.map((item) => {
              return (
                <N.Item>
                  <N.Picture>
                    <N.Img src={item.image} alt="img" />
                  </N.Picture>
                  <N.Title>
                    {item.title}
                    <N.Time>{item.data}</N.Time>
                  </N.Title>
                </N.Item>
              );
            })}
            <N.Button>더보기</N.Button>
          </N.List>
        </article>
      </N.NewsWrap>
    </N.Section>
  );
};

export default News;
