// Main packages
import React from "react";
// Icons
import LogosRowOne from "../assets/Logos-first-row.svg";
import LogosRowSecond from "../assets/Logos-second-row.svg";
import LogosRowThird from "../assets/Logos-third-row.svg";
// Styling
import styled from "styled-components";
import { device } from "./mediaQueries";

const ToolsWrapperStyle = styled.div`
  background-color: var(--pink);

  .tools-wrapper {
    display: grid;
    justify-content: center;
    text-align: center;
    padding-top: 100px;

    .tools-title {
      h2 {
        color: var(--white);
      }
    }
  }

  .tools-logos-wraper {
    padding: 40px 0;
    margin-bottom: -140px;

    background-color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;

    * {
      padding: 20px 0;
    }

    svg {
      width: 80%;
    }
  }

  // Responsive design
  @media ${device.laptopL} {
    .tools-logos-wraper {
      padding: 30px 0;
      * {
        padding: 0px;
      }

      svg {
        /* width: 100%; */
      }
    }
  }

  @media ${device.tablet} {
    .tools-wrapper {
      padding-top: 70px;
      h2 {
        padding-bottom: 20px;
      }
      .tools-logos-wraper {
        display: -ms-grid;
        /* display: grid; */
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        text-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 0px 50px -100px 50px;
        padding: 20px 40px;
        * {
          padding: 0px;
        }

        svg {
          /* margin: 0 auto 0 auto; */
          width: 100%;
          height: 60px;
          /* padding: 10px 0; */
          /* width: 70%; */
          /* height: 100%; */
        }
      }
    }
  }

  @media ${device.mobileL} {
    .tools-wrapper {
      padding-top: 50px;
      .tools-logos-wraper {
        margin: 0px 20px -100px 20px;
        padding: 20px 40px;

        svg {
          width: 100%;
          height: 45px;
        }
      }
    }
  }

  @media ${device.mobileM} {
    .tools-wrapper {
      padding-top: 20px;
      .tools-title {
        padding: 20px 0;
      }
      .tools-logos-wraper {
        margin: 0px 10px -70px 10px;
        padding-top: 10px;
        padding-bottom: 10px;

        svg {
          width: 100%;
          height: 35px;
        }
      }
    }
  }

  @media ${device.mobileS} {
    .tools-wrapper {
      padding-top: 20px;
      .tools-title {
        padding: 20px 0;
      }
      .tools-logos-wraper {
        margin: 0px 10px -70px 10px;

        svg {
          width: 200px;
          height: 35px;
        }
      }
    }
  }
`;

export default function Tools() {
  return (
    <ToolsWrapperStyle>
      <div className="wrapper">
        <div className="tools-wrapper">
          <div className="tools-title">
            <h2>
              I have used many tools <br /> for different projects
            </h2>
          </div>
          <div className="tools-logos-wraper">
            <LogosRowOne />
            <LogosRowSecond />
            <LogosRowThird />
          </div>
        </div>
      </div>
    </ToolsWrapperStyle>
  );
}
