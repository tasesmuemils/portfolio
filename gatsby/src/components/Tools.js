// Main packages
import React from "react";
// Icons
import LogosRowOne from "../assets/Logos-first-row.svg";
import LogosRowSecond from "../assets/Logos-second-row.svg";
import LogosRowThird from "../assets/Logos-third-row.svg";
import LogosRowFourth from "../assets/Logos_fourth_row.svg";
// Styling
import styled from "styled-components";
import { device } from "./mediaQueries";

const ToolsWrapperStyle = styled.div`
  background-color: var(--purple);
  .tools-wrapper {
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;

    .tools-title {
      padding: 40px 0;
      h3 {
        color: var(--white);
      }
    }

    .tools-logos-wraper {
      padding: 40px 0;
      margin-bottom: -140px;

      background-color: var(--white);
      -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;

      svg {
        padding: 20px 0;
        width: 80%;
      }
    }
  }

  // Responsive design
  @media ${device.laptopL} {
    .tools-wrapper {
      .tools-logos-wraper {
        padding: 30px 0;
        padding: 30px 0px 40px 0px;
        svg {
          padding: 5px 0px;
        }
      }
    }
  }

  @media ${device.laptop} {
    .tools-wrapper {
      .tools-title {
        padding: 30px 0;
        h3 {
          padding-bottom: 0;
        }
      }
      .tools-logos-wraper {
        padding: 30px 50px 40px 50px;

        svg {
          padding: 0px 0;
          width: 100%;
        }
      }
    }
  }

  @media ${device.tablet} {
    .tools-wrapper {
      .tools-title {
        padding: 35px 0;
      }
      .tools-logos-wraper {
        margin: 0px 50px -100px 50px;
        padding: 30px 40px 20px 40px;

        svg {
          width: 100%;
          height: 60px;
        }
      }
    }
  }

  @media ${device.mobileL} {
    .tools-wrapper {
      .tools-logos-wraper {
        margin: 0px 20px -100px 20px;
        padding: 30px 15px 20px 15px;
        border-radius: 15px;

        svg {
          padding: 5px 0;
          width: 100%;
          height: 40px;
        }
      }
    }
  }

  @media ${device.mobileM} {
    .tools-wrapper {
      .tools-title {
        padding: 30px 0;
      }
      .tools-logos-wraper {
        margin: 0px 10px -70px 10px;

        svg {
          width: 100%;
          height: 35px;
        }
      }
    }
  }

  @media ${device.mobileS} {
    .tools-wrapper {
      padding-top: 10px;
      .tools-title {
        padding: 20px;
        h3 {
          font-size: 15px;
        }
      }
      .tools-logos-wraper {
        margin: 0px 10px -70px 10px;
        padding: 15px;
        border-radius: 10px;
        svg {
          width: 100%;
          height: 20px;
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
            <h3>
              I have used many tools <br /> for different projects
            </h3>
          </div>
          <div className="tools-logos-wraper">
            <LogosRowOne />
            <LogosRowSecond />
            <LogosRowThird />
            <LogosRowFourth />
          </div>
        </div>
      </div>
    </ToolsWrapperStyle>
  );
}
