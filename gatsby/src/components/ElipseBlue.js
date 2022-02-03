// Main packages
import React from "react";
// Components
import ElipseBlueSvg from "../assets/Elipse_2.svg";
// Styling
import styled from "styled-components";

const ElipseBlueStyled = styled.div`
  position: absolute;
  z-index: -1;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export default function ElipseOrange(props) {
  return (
    <ElipseBlueStyled top={props.top} left={props.left}>
      <ElipseBlueSvg />
    </ElipseBlueStyled>
  );
}
