// Main packages
import React from "react";
// Styling
import styled from "styled-components";
// Components
import ElipseOrange from "../assets/Elipse_1.svg";
import ElipseBlue from "../assets/Elipse_2.svg";

const AboutStyle = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  padding: 50px 200px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 39px;
    line-height: 41px;
    letter-spacing: 0.02em;
  }

  p {
    color: #333333;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0.02em;
  }
`;

const ElipseOrangeStyle = styled.div`
  position: absolute;
  top: -20%;
  z-index: -1;
`;

const ElipseBlueStyle = styled.div`
  position: absolute;
  right: 0;
  bottom: -20%;
  /* top: -20%; */
  z-index: -1;
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

      <AboutStyle>
        <h2>Nice to meet you</h2>
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
