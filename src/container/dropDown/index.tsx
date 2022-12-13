import Link from "next/link";
import { useState } from "react";
import { subNavItem } from "../../presenter/main/navItems";
import * as D from "./styled";

const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <ul>
        {subNavItem.map((item) => {
          return (
            <li>
              <Link href={""}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { DropDown };
