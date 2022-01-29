// Main packages
import React from "react";
// Styling
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
// Components
import Footer from "./Footer";

const Wrapper = styled.div`
  display: grid;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Wrapper>
        {children}
        <Footer />
      </Wrapper>
    </div>
  );
}
