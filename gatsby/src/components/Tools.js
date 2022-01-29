// Main packages
import React from "react";
// Icons
import LogosRowOne from "../assets/Logos-first-row.svg";
import LogosRowSecond from "../assets/Logos-second-row.svg";
import LogosRowThird from "../assets/Logos-third-row.svg";
// Styling
import styled from "styled-components";

const ToolsWrapperStyle = styled.div`
  background-color: var(--pink);

  .tools-wrapper {
    display: grid;
    justify-content: center;
    text-align: center;
    padding-top: 100px;

    .tools-title {
      font-style: normal;
      font-weight: 600;
      font-size: 39px;
      line-height: 45px;
      letter-spacing: 0.02em;
      color: #ffffff;
    }
  }

  .tools-logos-wraper {
    /* padding: 30px; */
    padding: 40px 0;
    margin-bottom: -140px;
    margin-left: 100px;
    margin-right: 100px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;

    * {
      padding: 20px 0;
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
