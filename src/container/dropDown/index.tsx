/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/14/2022
  ==============================================================================
*/
import Link from "next/link";
import { useState } from "react";
import { subNavItem, subNavItem2 } from "../../presenter/main/navItems";
import * as D from "./styled";

const CompanyDropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <D.List onClick={() => setDropDown(!dropDown)}>
        {subNavItem.map((item) => {
          if (item.title === "회사소개") {
            return (
              <D.Item dropDown={dropDown}>
                <Link href={""} onClick={() => setDropDown(false)}>
                  {item.subTitle}
                </Link>
              </D.Item>
            );
          }
        })}
      </D.List>
    </>
  );
};

const ServiceDropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <D.List>
        {subNavItem2.map((item) => {
          return (
            <D.Item dropDown={dropDown}>
              <Link href={""} onClick={() => setDropDown(false)}>
                {item.subTitle}
              </Link>
            </D.Item>
          );
        })}
      </D.List>
    </>
  );
};

const TogetherDropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <D.List>
        {subNavItem2.map((item) => {
          return (
            <li>
              <Link href={""}>{item.title}</Link>
            </li>
          );
        })}
      </D.List>
    </>
  );
};

const NewsDropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <D.List>
        {subNavItem2.map((item) => {
          return (
            <li>
              <Link href={""}>{item.title}</Link>
            </li>
          );
        })}
      </D.List>
    </>
  );
};

export { CompanyDropDown, ServiceDropDown };
