// Main packages
import React from "react";
// Styling
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import Typography from "../styles/Typography";
// Components
import Footer from "./Footer";

const Wrapper = styled.div`
  display: grid;
  position: relative;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Wrapper>
        {children}
        <Footer />
      </Wrapper>
    </div>
  );
}
