import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import Footer from "./Footer";
import Nav from "./Nav";

const Wrapper = styled.div`
  max-width: 1280px;
  display: grid;
  margin: 0 auto;
  border: 3px solid red;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Wrapper>
        <Nav />
        {children}
        <Footer />
      </Wrapper>
    </div>
  );
}
