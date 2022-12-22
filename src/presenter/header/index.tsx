/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/12/2022
  ==============================================================================
*/ import React, { FC, useState } from "react";
import * as H from "./styled";
import { navItem } from "../../container/main/navItems";
import Link from "next/link";
import {} from "../headerSlide";
import { useEffect } from "react";
import Logo from "../../commons/logo";
import { HeaderSlide } from "../headerSlide/index";
import { HeaderInner } from "../inner/inner";

const Header: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [nav, setNav] = useState<string>("");
  const [subTitleList, setSubTitleList] = useState<string[]>([""]);

  //slider header
  const [windowWidth, setWindowWidth] = useState(0);

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  const onHandleToggle = () => {
    setActive(!active);
  };

  const onHandleNav = (newNav: string) => {
    // nav 상태 바꿔주는 코드
    if (newNav === "회사소개") {
      setDropDown(true);
      setNav("회사소개");
    }
    if (newNav === "서비스") {
      setDropDown(true);
      setNav("서비스");
    }
    if (newNav === "함께가치") {
      setDropDown(true);
      setNav("함께가치");
    }
    if (newNav === "뉴스룸") {
      setDropDown(true);
      setNav("뉴스룸");
    }
  };

  //subTitle filter
  useEffect(() => {
    setSubTitleList(
      navItem.filter((item) => item.title === nav)[0]?.subTitle ?? [""]
    );
  }, [nav]);

  //slider header
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowWidth]);

  return (
    <HeaderInner>
      <H.Header>
        <H.HeaderNav>
          <Logo />
          <H.MainNav active={active}>
            <H.List>
              {navItem.map((item) => (
                <H.ListItem
                  onMouseEnter={() => onHandleNav(item.title)}
                  key={item.id}
                >
                  <Link href={item.path}>{item.title}</Link>

                  <H.SubList
                    dropDown={dropDown}
                    onClick={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}
                  >
                    <H.SubItem dropDown={dropDown}>
                      {subTitleList.map((sub) => (
                        <H.SubItemLink
                          key={sub}
                          href={""}
                          onClick={() => setDropDown(false)}
                        >
                          {sub}
                        </H.SubItemLink>
                      ))}
                    </H.SubItem>
                  </H.SubList>
                </H.ListItem>
              ))}
            </H.List>
          </H.MainNav>
          <H.SubNav active={active}>
            {windowWidth > 980 ? (
              <>
                <H.SubListMenu>배민다움</H.SubListMenu>
                <H.SubListMenu>인재영입</H.SubListMenu>
                <H.SubListMenu>한</H.SubListMenu>
                <H.SubListMenu>A</H.SubListMenu>
              </>
            ) : (
              <HeaderSlide />
            )}
          </H.SubNav>
          {active ? (
            <H.CloseIcon onClick={onHandleToggle} />
          ) : (
            <H.BurgerIcon onClick={onHandleToggle} />
          )}
        </H.HeaderNav>
      </H.Header>
    </HeaderInner>
  );
};

export default Header;
