// Main packages
import React from "react";
import Shapes from "../assets/Shapes.svg";
// Styles
import styled from "styled-components";
import { device } from "./mediaQueries";
//Components
import Nav from "./Nav";
import Button from "./Button";

const HeroWrapperStyle = styled.div`
  background: linear-gradient(to right, var(--purple) 66%, #ffffff 0%);
  position: relative;

  .shapes-wrapper {
    width: 100%;
    svg {
      /* width: 15%; */
      position: absolute;
      top: 20%;
      left: 66%;
      margin-left: -3em;
      .circleShadow {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    }
  }

  // Responsive design
  @media ${device.laptopL} {
    .shapes-wrapper {
      svg {
        width: 13%;
      }
    }
  }

  @media ${device.laptop} {
    background: linear-gradient(to right, var(--purple) 60%, #ffffff 0%);

    .shapes-wrapper {
      svg {
        width: 10%;
        top: 0%;
        left: 60%;
        margin-left: -2em;
      }
    }
  }

  @media ${device.tablet} {
    background: linear-gradient(to right, var(--purple) 100%, #ffffff 0%);
    .shapes-wrapper {
      svg {
        transform: rotate(90deg);
        width: 10%;
        top: 28%;
        left: 20%;
      }
    }
  }

  @media ${device.mobileL} {
    .shapes-wrapper {
      .shape {
        height: 40%;
        top: 82%;
        width: 15%;
        left: 30%;
      }
    }
  }
`;

const HeroStyle = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 66% auto;

  .hero-content {
    display: grid;
    align-items: center;
    margin-top: 300px;
    margin-bottom: 350px;

    .hero-content-wrapper {
      color: var(--white);

      h1 {
        font-size: 57px;
        font-style: normal;
        font-weight: bold;
        margin: 0;
      }

      h3 {
        font-size: 1.3em;
        margin: 0;
        padding-bottom: 30px;
      }

      button {
        font-size: 20px;
        padding: 15px 30px;
      }
    }
  }

  // Responsive design
  @media ${device.laptopL} {
    .hero-content {
      display: grid;
      align-items: center;
      margin-top: 250px;
      margin-bottom: 300px;
    }
  }

  @media ${device.laptop} {
    grid-template-columns: 60% auto;

    .hero-content {
      margin-top: 170px;
      margin-bottom: 200px;

      .hero-content-wrapper {
        h1 {
          font-size: 2.5em;
        }

        h3 {
          font-size: 1em;
          padding-bottom: 20px;
        }

        button {
          font-size: 15px;
          padding: 10px 20px;
        }
      }
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;

    .hero-content {
      margin-top: 100px;
      margin-bottom: 120px;

      .hero-content-wrapper {
        h1 {
          font-size: 2em;
        }
      }
    }
  }

  @media ${device.mobileM} {
    .hero-content {
      margin-top: 50px;
      margin-bottom: 100px;

      .hero-content-wrapper {
        h1 {
          font-size: 1.5em;
        }

        h3 {
          font-size: 0.7em;
          padding-bottom: 15px;
        }
      }
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
                <h1>Hi, I'm Emils.</h1>
                <h3>Learning front-end web development</h3>
                <div>
                  <Button text="LETS TALK!" />
                </div>
              </div>
            </div>
          </HeroStyle>
        </div>
        <div className="shapes-wrapper">
          <Shapes className="shape" />
        </div>
      </HeroWrapperStyle>
    </>
  );
}
