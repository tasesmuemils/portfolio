// Main packages
import React from "react";
// Components
import Shapes from "../assets/Shapes.svg";
import InstagramIcon from "../assets/Instagram_Icon.svg";
import GithubIcon from "../assets/Github_Icon.svg";
import TwitterIcon from "../assets/Twitter_Icon.svg";
// Styles
import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: var(--purple);
  /* * {
    border: red 1px solid;
  } */
  .shapes-wrapper {
    position: absolute;
    bottom: 4em;
    left: 0;
    transform: rotate(90deg);
    svg {
      width: 70%;
    }
  }

  .footer-content {
    display: grid;
    text-align: center;
    color: var(--white);
    padding-top: 150px;
    padding-bottom: 50px;
    * {
      margin: 0;
    }

    .email {
      font-style: normal;
      font-weight: 300;
      font-size: 31px;
      line-height: 46px;
      letter-spacing: 0.03em;
      padding-bottom: 10px;
    }

    .footer-icons-list {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 30px;
      li {
        list-style: none;
        padding: 0 20px;
        svg path {
          fill: var(--white);
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="wrapper">
        <div className="shapes-wrapper">
          <Shapes />
        </div>

        <div className="footer-content">
          <p className="email">emils.bisenieks93@gmail.com</p>
          <ul className="footer-icons-list">
            <li>
              <InstagramIcon className="icon" />
            </li>
            <li>
              <GithubIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
          </ul>
          <p>Created with Gatsby</p>
          <p>&#169; {new Date().getFullYear()} Emils Bisenieks</p>
        </div>
      </div>
    </FooterStyle>
  );
}
