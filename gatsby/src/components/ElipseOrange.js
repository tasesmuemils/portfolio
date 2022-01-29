// Main packages
import React from "react";
// Components
import ElipseOrangeSvg from "../assets/Elipse_1.svg";
// Styling
import styled from "styled-components";

const ElipseOrangeStyled = styled.div`
  position: absolute;
`;

export default function ElipseOrange() {
  return (
    <ElipseOrangeStyled>
      <ElipseOrangeSvg />
    </ElipseOrangeStyled>
  );
}
