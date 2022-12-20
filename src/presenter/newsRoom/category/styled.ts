import styled from "@emotion/styled";

const TitleBox = styled.div`
  position: relative;
  text-align: center;
  height: 64px;
  color: #d6d7da;
  font-size: 20px;
  font-weight: 700;
`;

const Title = styled.i`
  padding: 0 20px;
  /* border: 1px solid black; */
  border-width: 0 0 0 1px;
  cursor: pointer;
  &::after {
    content: "";
    opacity: 0;
  }

  &:hover {
    color: #232324;
  }
`;
export { TitleBox, Title };
