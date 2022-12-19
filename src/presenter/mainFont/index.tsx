import React from "react";
import * as F from "./styled";
import { Titles } from "../../commons/title";
import { Small } from "../Introduce/styled";
import { fontItem } from "../../container/main/mainFont";

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
        <ul>
          {fontItem.map((item) => {
            return (
              <F.List>
                <F.FontTitle>{item.title}</F.FontTitle>
                <em>{item.icon}</em>
              </F.List>
            );
          })}
        </ul>
        <button></button>
      </article>
    </F.Section>
  );
};

export default MainFont;
