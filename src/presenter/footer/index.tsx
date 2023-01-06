/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/

import React, { FC } from "react";
import { FooterItem, footerMenuItem } from "../../container/main/footer";
import * as F from "./style";
import { useEffect } from "react";
import { useState } from "react";

interface FooterType {
  id: number;
  title: string;
  subTitle: string[];
  path: string;
}
const Footer: FC = () => {
  const [footerMenu, setFooterMenu] = useState<FooterType[]>(FooterItem);

  return (
    <F.Footer>
      <F.FooterBox>
        <F.List>
          {footerMenu.map((item) => {
            return (
              <F.Item key={item.id}>
                <F.Title>{item.title}</F.Title>
                <F.ListSubTitle>
                  {item.subTitle.map((item) => {
                    return (
                      <F.ItemSubTitle key={item}>
                        <F.SubItem>{item}</F.SubItem>
                      </F.ItemSubTitle>
                    );
                  })}
                </F.ListSubTitle>
              </F.Item>
            );
          })}
          <F.ListSubTitleTwo>
            {footerMenuItem.map((item) => {
              return (
                <F.ItemSubTitle key={item}>
                  <F.SubItem>{item}</F.SubItem>
                </F.ItemSubTitle>
              );
            })}
          </F.ListSubTitleTwo>
        </F.List>
        <F.ButtonBox>
          <F.Button>관련 사이트</F.Button>
        </F.ButtonBox>
        <F.AdressBox>
          <F.Title>(주)우아한형제들</F.Title>
          <address>
            <F.AdressText>
              <span>사업자 등록번호 : 120-87-65763</span>
              <F.Iline>|</F.Iline>
              <span>대표 : 김봉진, 김범준</span>
              <F.Iline>|</F.Iline>
              <span>주소 : 서울시 송파구 위례성대로 2 (방이동, 장은빌딩)</span>
            </F.AdressText>
          </address>
        </F.AdressBox>
      </F.FooterBox>
    </F.Footer>
  );
};

export default Footer;
