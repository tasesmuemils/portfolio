// Main packages
import React from "react";
// Styling
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import Typography from "../styles/Typography";
// Components
import Footer from "./Footer";
import SEO from "./SEO";

const Wrapper = styled.div`
  display: grid;
  position: relative;
`;

export default function Layout({ children }) {
  const footerHeight = (height) => {
    console.log(height, children);
  };

  return (
    <>
      <SEO title={`Emils Bisenieks Portfolio`} />
      <GlobalStyles />
      <Typography />
      <Wrapper>
        {children}
        <Footer height={footerHeight} />
      </Wrapper>
    </>
  );
}
