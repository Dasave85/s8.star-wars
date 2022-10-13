import styled from "styled-components";

export const ContainerStarshipsList = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  button {
    font-family: "DIN Next W01 Regular", Helvetica, Arial, sans-serif;
    background: black;
    color: #999;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;

export const ContainerItem = styled.div`
  color: #999;
  background: #1c1a1a;

  a {
    color: #999;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 2px;
    font-family: "DIN Next W01 Regular", Helvetica, Arial, sans-serif;
    font-size: 25px;
    &:hover {
      color: white;
    }
  }
`;
