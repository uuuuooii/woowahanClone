import styled from "@emotion/styled";
import HeaderIcon from "../../public/images/headerIcon";

const HeaderLogo = styled.h1`
  position: relative;
  align-items: flex-start;
  max-width: 1180px;
  padding: 0 40px;
  @media (max-width: 980px) {
    padding: 0 24px;
  }
`;

const Link = styled.a`
  display: block;
`;

const Logo = () => {
  return (
    <>
      <HeaderLogo>
        <Link href="/">
          <HeaderIcon />
        </Link>
      </HeaderLogo>
    </>
  );
};

export default Logo;
