/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/19/2022
  ==============================================================================
*/

import styled from "@emotion/styled";

const Footer = styled.footer`
  padding: 60px 24px 85px 24px;
  color: #37373a;
  /* letter-spacing: -0.02em; */
  background-color: #f3f4f5;
  z-index: 2;
`;

const FooterBox = styled.div`
  position: relative;
  max-width: 1186px;
  margin: 0 auto;
  padding: 0 7px;
`;

const List = styled.ul`
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

const Item = styled.li``;

const Title = styled.a`
  line-height: 1.75;
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 700;
`;

const ListSubTitle = styled.ul`
  @media (max-width: 750px) {
    margin-bottom: 40px;
  }
`;

const SubItem = styled.a`
  margin-top: 8px;
  color: #6c6d6f;
  font-size: 0.875rem;
  line-height: 1.4;
  @media (max-width: 750px) {
    margin: 13px 11px 0 0;
  }
`;

const ListSubTitleTwo = styled.ul`
  @media (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    margin-top: 6px;
    padding-top: 40px;
    border-top: 1px solid #d6d7da;
  }
`;

const ItemSubTitle = styled.li`
  margin-top: 8px;
  @media (max-width: 480px) {
    flex-basis: 50%;
  }
`;

const AdressBox = styled.div`
  margin-top: 28px;
  margin-right: 345px;
  @media (max-width: 750px) {
    margin-right: 0;
  }
`;

const AdressText = styled.p`
  font-size: 0.875rem;
  line-height: 1.7142857143;
`;

const Iline = styled.i`
  margin: 0 4px;
`;

const ButtonBox = styled.div`
  position: absolute;
  width: 327px;
  bottom: 0;
  right: 7px;
  @media (max-width: 750px) {
    position: relative;
    right: auto;
    bottom: auto;
    width: auto;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 50px;
  padding: 13px 16px;
  font-size: 0.875rem;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid #a6a7a9;
  border-radius: 8px;
  background: #fff;
`;

export {
  Footer,
  FooterBox,
  List,
  Item,
  Title,
  ListSubTitle,
  ListSubTitleTwo,
  ItemSubTitle,
  SubItem,
  AdressBox,
  AdressText,
  ButtonBox,
  Iline,
  Button,
};
