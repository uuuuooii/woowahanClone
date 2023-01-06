import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface TitleProps {
  children: ReactNode;
}

export const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
  word-break: keep-all;
  @media (max-width: 475px) {
    margin: 0 auto;
    /* max-width: 300px; */
    word-break: keep-all;
  }
  @media (min-width: 750px) {
    font-size: 2.5rem;
  }
`;

export const Small = styled.p`
  display: block;
  padding-top: 20px;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.75;
`;

export const Titles = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

export const SubContent = ({ children }: TitleProps) => {
  return <Small>{children}</Small>;
};
