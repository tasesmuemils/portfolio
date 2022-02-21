// Main packages
import React from "react";
// Styling
import styled from "styled-components";
import { device } from "./mediaQueries";

// Components
import ElipseOrange from "../assets/Elipse_1.svg";
import ElipseBlue from "../assets/Elipse_2.svg";

const AboutStyle = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  padding: 150px 100px;

  // Responsive design
  @media ${device.laptopL} {
    padding: 100px 50px;
  }

  @media ${device.laptop} {
    padding: 70px 20px;
  }

  @media ${device.tablet} {
    padding: 120px 30px 100px 30px;
  }

  @media ${device.mobileM} {
    padding: 120px 25px 100px 25px;
  }

  @media ${device.mobileS} {
    padding: 80px 10px 60px 25px;
  }
`;

const ElipseOrangeStyle = styled.div`
  position: absolute;
  top: -20%;
  z-index: -1;

  @media ${device.laptop} {
    top: -40%;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const ElipseBlueStyle = styled.div`
  position: absolute;
  right: 0;
  bottom: -20%;
  /* top: -20%; */
  z-index: -1;

  @media ${device.laptop} {
    bottom: -50%;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export default function About() {
  return (
    <div className="wrapper">
      <ElipseOrangeStyle>
        <ElipseOrange />
      </ElipseOrangeStyle>
      <ElipseBlueStyle>
        <ElipseBlue />
      </ElipseBlueStyle>

      <AboutStyle id="about">
        <h3>Nice to meet you</h3>
        <p>
          My name is Emils Bisenieks and I am learning front-end web
          development. I hope this page will help to understand my skills and
          see me as a possible hire.{" "}
        </p>
        <p>
          Since I remember, I always was fascinated how things work on the web.
          At school, I wasn't very interested to do something about it, but one
          day I just started to explore. Since beginning my journey of learning
          web development, I have read books, done tutorials, following
          front-end forums and news. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one problem at a time.
        </p>
      </AboutStyle>
    </div>
  );
}
