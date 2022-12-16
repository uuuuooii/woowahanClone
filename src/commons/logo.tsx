import React from "react";
import styled from "@emotion/styled";
import HeaderIcon from "../../public/images/headerIcon";

const HeaderLogo = styled.h1`
  position: relative;
  align-items: flex-start;
  max-width: 1180px;
  margin: 0 auto;
`;

const Logo = () => {
  return (
    <>
      <HeaderLogo>
        <a>
          <HeaderIcon />
        </a>
      </HeaderLogo>
    </>
  );
};

export default Logo;
