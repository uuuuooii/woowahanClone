/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/16/2022
  ==============================================================================
*/
import React, { FC } from "react";
import Logo from "../../commons/logo";
import * as HS from "./styled";
import { navItem } from "../../container/main/navItems";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export const HeaderSlide: FC = () => {
  const [titleList, setTitleList] = useState<string[]>([""]);

  useEffect(() => {
    setTitleList(navItem.filter((item) => item.title)[0]?.subTitle ?? [""]);
  });
  return (
    <HS.Article>
      <HS.Box>
        <Logo />
      </HS.Box>
      <nav>
        <HS.List>
          {navItem.map((item) => {
            return (
              <HS.Item key={item.id}>
                <HS.Title>
                  <Link href={item.path}>{item.title}</Link>
                </HS.Title>
                <HS.Arrow> </HS.Arrow>
                <ul>
                  <li>
                    {titleList.map((item) => {
                      return <a key={item}>{item}</a>;
                    })}
                  </li>
                </ul>
              </HS.Item>
            );
          })}
        </HS.List>
      </nav>
      <nav>
        <a></a>
      </nav>
      <footer></footer>
    </HS.Article>
  );
};
