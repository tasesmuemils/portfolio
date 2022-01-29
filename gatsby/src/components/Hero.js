import React from "react";
import Shapes from "../assets/Shapes.svg";
// Styles
import styled from "styled-components";
import Nav from "./Nav";
import Button from "./Button";

const HeroWrapperStyle = styled.div`
  background: linear-gradient(to right, var(--purple) 66%, #ffffff 0%);
`;

const HeroStyle = styled.div`
  display: grid;
  grid-template-columns: 60% auto;

  .hero-content {
    display: grid;
    align-items: center;
    padding-bottom: 4em;

    .hero-content-wrapper {
      color: #ffffff;

      h1 {
        font-size: 57px;
        margin: 0;
      }

      h2 {
        font-size: 1.3em;
        margin: 0;
        padding-bottom: 30px;
      }
    }
  }

  .shapes-wrapper {
    .shape {
      margin-left: 8em;
      margin-top: 5em;
      margin-bottom: 7em;
    }
  }
`;

export default function Hero() {
  return (
    <>
      <HeroWrapperStyle>
        <div className="wrapper">
          <Nav />
          <HeroStyle>
            <div className="hero-content">
              <div className="hero-content-wrapper">
                <h1>Hi, I'm Emils</h1>
                <h2>Learning front-end web development</h2>
                <div>
                  <Button text="LETS TALK!" />
                </div>
              </div>
            </div>
            <div className="shapes-wrapper">
              <Shapes className="shape" />
            </div>
          </HeroStyle>
        </div>
      </HeroWrapperStyle>
    </>
  );
}
