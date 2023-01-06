import styled from "@emotion/styled";

const Section = styled.section`
  overflow: hidden;
  padding: 120px 0 136px;
  background-color: #232324;
`;
const TextBox = styled.div`
  color: white;
`;
const List = styled.ul`
  display: flex;
  margin: 60px 0;
  animation: scroll 30s linear infinite;
  width: calc(250px * 15);
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-300px * 7));
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100px;
  padding: 16px;
  margin: 0 8px;
  border-radius: 8px;
  background: #37373a;
`;
const FontTitle = styled.p`
  text-align: left;
  color: #6c6d6f;
  font-size: 1rem;
  font-weight: 700;
`;

const FontIcon = styled.em`
  display: block;
  padding: 32px 0px 0px 85px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  margin: 40px auto 0;
  cursor: pointer;
  padding: 0 22px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.75;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export { Section, TextBox, List, Item, FontTitle, FontIcon, Button };
