/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/12/2022
  ==============================================================================
*/ import React, { FC, useState } from "react";
import HeaderIcon from "../../../public/images/headerIcon";
import * as H from "./styled";
import { navItem } from "../../presenter/main/navItems";
import Link from "next/link";
import { CompanyDropDown, ServiceDropDown } from "../dropDown";

const Header: FC = () => {
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

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
        <H.List>
          <H.ListItem
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
          >
            <Link href={""}>회사소개</Link>
            {dropDown && <CompanyDropDown />}
          </H.ListItem>
          <H.ListItem
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
          >
            <Link href={""}>서비스</Link>
            {dropDown && <ServiceDropDown />}
          </H.ListItem>
          <H.ListItem>
            <Link href={""}>함께가치</Link>
          </H.ListItem>
          <H.ListItem>
            <Link href={""}>뉴스룸</Link>
          </H.ListItem>
          <H.ListItem>
            <Link href={""}>글꼴</Link>
          </H.ListItem>
        </H.List>
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
