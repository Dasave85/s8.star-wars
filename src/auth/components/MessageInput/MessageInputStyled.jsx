import styled from "styled-components";

export const MessageInputStyled = styled.p`
  color: ${({ message }) =>
    message !== "Usuario registrado" ? "#f83535" : "#999"};
  font-style: ${({ message }) =>
    message !== "Usuario registrado" ? "italic" : "normal"};
`;
