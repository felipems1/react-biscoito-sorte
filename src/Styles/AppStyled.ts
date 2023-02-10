import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
  background-color: ${(props) => props.theme.body};
`;

export const BiscuitImage = styled.img`
  height: 300px;
  width: auto;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnFontColor};
  padding: 15px 80px;
  border: 0;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Phrase = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  margin: 0 10px;
`;
