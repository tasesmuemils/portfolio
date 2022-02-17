// Main packages
import React from "react";
// Components
import ElipseOrangeSvg from "../assets/Elipse_1.svg";
// Styling
import styled from "styled-components";

const ElipseOrangeStyled = styled.div`
  position: absolute;
  z-index: -1;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export default function ElipseOrange(props) {
  return (
    <ElipseOrangeStyled top={props.top} left={props.left}>
      <ElipseOrangeSvg />
    </ElipseOrangeStyled>
  );
}
