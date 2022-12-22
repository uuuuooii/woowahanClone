/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/22/2022
  ==============================================================================
*/
import { FC, SetStateAction, useState } from "react";
import * as S from "./styled";

const Search: FC = () => {
  const [searchInput, setSearchInput] = useState();

  const searchItems = (searchValue: SetStateAction<undefined>) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      // const
    }
  };
  return (
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
  );
};

export default Search;
