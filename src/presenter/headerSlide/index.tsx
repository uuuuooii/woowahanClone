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
  const [checkedItem, setCheckedItem] = useState<Set<number>>(new Set());

  const onHandleCheck = (id: number) => {
    // 해당 id가 이미 있다면
    if (checkedItem.has(id)) {
      const changeItem = new Set(checkedItem);
      // id 를 Set에서 지워줌
      changeItem.delete(id);
      setCheckedItem(changeItem);
      // 해당 id가 이미 없다면
    } else {
      const changeItem = new Set(checkedItem);
      // id 를 Set에 추가해줌
      changeItem.add(id);
      setCheckedItem(changeItem);
    }
    console.log(checkedItem);
  };

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
                <HS.ItemBox>
                  <HS.Title>
                    <Link href={item.path}>{item.title}</Link>
                  </HS.Title>
                  {/* 제작 버튼 */}
                  <div>
                    {checkedItem.has(item.id) ? (
                      <HS.Arrow
                        onClick={() => {
                          onHandleCheck(item.id);
                        }}
                      />
                    ) : (
                      <HS.UnderArrow
                        onClick={() => {
                          onHandleCheck(item.id);
                        }}
                      />
                    )}
                  </div>
                </HS.ItemBox>
                <HS.DropDownItem dropDown={checkedItem.has(item.id)}>
                  {checkedItem.has(item.id) && (
                    <>
                      <HS.DropDownList dropDown={checkedItem.has(item.id)}>
                        {item.subTitle.map((item) => {
                          return (
                            <>
                              <HS.SubTitle key={item}>{item}</HS.SubTitle>
                            </>
                          );
                        })}
                      </HS.DropDownList>
                    </>
                  )}
                </HS.DropDownItem>
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
