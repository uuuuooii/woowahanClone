import React from "react";
import * as F from "./styled";

import { fontItem } from "../../container/main/mainFont";
import { Titles } from "../../commons/title";
import { Small } from "../main/Introduce/styled";

const MainFont = () => {
  return (
    <F.Section>
      <article>
        <F.TextBox>
          <Titles>배달의민족 글꼴 찾으세요?</Titles>
          <Small>
            배달의민족이 만든 모든 글꼴은 무료입니다. <br />
            마음껏 쓰고, 널리 퍼뜨리는 것도 무료!
          </Small>
        </F.TextBox>
        <F.List>
          {fontItem.map((item) => {
            return (
              <F.Item key={item.id}>
                <F.FontTitle>{item.title}</F.FontTitle>
                <em>{item.icon}</em>
              </F.Item>
            );
          })}
        </F.List>
        <F.Button>더보기</F.Button>
      </article>
    </F.Section>
  );
};

export default MainFont;
