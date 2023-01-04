import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: end;
  background: black;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100px;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  button {
    color: #999;
    font-weight: 700;
    letter-spacing: 1.5px;
    font-family: "DIN Next W01 Regular", Helvetica, Arial, sans-serif;
    font-size: 14px;
    &:hover {
      color: white;
    }
  }
`;
