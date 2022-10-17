import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: black;
`;

export const ContainerCard = styled.div`
  background: black;
  border: none;
  width: 50rem;

  h1 {
    color: white;
  }

  img {
    border-bottom: 2px solid orangered;
  }
  a {
    text-decoration: none;
    color: #999;
    font-style: oblique;
    font-size: 18px;
    &:hover {
      color: white;
      font-size: 22px;
    }
  }
`;
