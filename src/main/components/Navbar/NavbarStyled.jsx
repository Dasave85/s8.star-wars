import styled from "styled-components";

export const ContainerNavbar = styled.nav`
  background: black;
  height: 31px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid;
  border-top: 1px solid;
`;

export const DivLink = styled.div`
  display: flex;
  justify-content: center;
  border-left: 1px solid;
  border-right: 1px solid;

  a {
    color: #999;
    text-decoration: none;
    &:hover {
      color: white;
      border-bottom: 2px solid white;
    }
  }
`;
