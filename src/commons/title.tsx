import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface TitleProps {
  children: ReactNode;
}

export const Title = styled.h3`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
`;

export const Small = styled.p`
  display: block;
  padding-top: 20px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const Titles = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

export const SubContent = ({ children }: TitleProps) => {
  return <Small>{children}</Small>;
};
