/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/12/2022
  ==============================================================================
*/ import React, { FC, useState } from "react";
import HeaderIcon from "../../../public/images/headerIcon";
import * as H from "./styled";

const Header: FC = () => {
  const [active, setActive] = useState(false);

  const onHandleToggle = () => {
    setActive(!active);
  };
  return (
    <H.Header>
      <H.HeaderLogo>
        <a>
          <HeaderIcon />
        </a>
      </H.HeaderLogo>
      <H.MainNav active={active}>
        <ul>
          <li>
            <H.ListMenu href="#">회사소개</H.ListMenu>
            <H.ListMenu href="#">서비스</H.ListMenu>
            <H.ListMenu href="#">함께가치</H.ListMenu>
            <H.ListMenu href="#">뉴스룸</H.ListMenu>
            <H.ListMenu href="#">글꼴</H.ListMenu>
          </li>
        </ul>
      </H.MainNav>
      <H.SubNav active={active}>
        <H.SubListMenu>배민다움</H.SubListMenu>
        <H.SubListMenu>인재영입</H.SubListMenu>
        <H.SubListMenu>한</H.SubListMenu>
        <H.SubListMenu>A</H.SubListMenu>
      </H.SubNav>
      {active ? (
        <H.CloseIcon onClick={onHandleToggle} />
      ) : (
        <H.BurgerIcon onClick={onHandleToggle} />
      )}
    </H.Header>
  );
};

export default Header;
