/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/

import React, { FC } from "react";
import { FooterItem } from "../../container/main/footer";
import * as F from "./style";
import { useEffect } from "react";
import { useState } from "react";

const Footer: FC = () => {
  const [titleList, setTitleList] = useState<string[]>([""]);

  useEffect(() => {
    setTitleList(FooterItem.filter((item) => item.title)[0]?.subTitle ?? [""]);
  });

  return (
    <F.Footer>
      <div>
        <F.List>
          {FooterItem.map((item) => {
            return (
              <li>
                <F.Title>{item.title}</F.Title>
                <F.ListSubTitle>
                  <li>
                    {titleList.map((item) => {
                      return <F.ItemSubTitle key={item}>{item}</F.ItemSubTitle>;
                    })}
                  </li>
                </F.ListSubTitle>
                <ul>
                  <li>{item.footerMenu}</li>
                </ul>
              </li>
            );
          })}
        </F.List>
        <div>
          <h2></h2>
          <address>
            <p>
              <span></span>
            </p>
          </address>
        </div>
      </div>
    </F.Footer>
  );
};

export default Footer;
