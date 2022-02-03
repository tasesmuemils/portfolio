// Main packages
import React from "react";
// Styling
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: var(--blue);
  color: white;

  border: none;
  font-size: 24px;
  border-radius: 36px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function Button({ text }) {
  return <ButtonStyle>{text}</ButtonStyle>;
}
