import React from "react";
import * as S from "./styled";
import { Inner } from "../../inner/inner";

const Search = () => {
  return (
    <Inner>
      <S.Section>
        <S.Article>
          <S.TitleBox>
            <S.Title>뉴스룸</S.Title>
          </S.TitleBox>
          <S.InputBox>
            <span>
              <S.Input placeholder="검색해보세요" />
            </span>
          </S.InputBox>
        </S.Article>
      </S.Section>
    </Inner>
  );
};

export default Search;
