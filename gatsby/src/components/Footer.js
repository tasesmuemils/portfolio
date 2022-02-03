// Main packages
import React from "react";
// Components
import Shapes from "../assets/Shapes.svg";
import InstagramIcon from "../assets/Instagram_Icon.svg";
import GithubIcon from "../assets/Github_Icon.svg";
import TwitterIcon from "../assets/Twitter_Icon.svg";
// Styles
import styled from "styled-components";
import { device } from "./mediaQueries";

const FooterStyle = styled.div`
  background-color: var(--purple);
  .shapes-wrapper {
    position: absolute;
    bottom: 5em;
    left: 3em;
    transform: rotate(90deg);
    svg {
      width: 65%;
      .circleShadow {
        filter: drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25));
      }
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
      font-size: 27px;
      line-height: 46px;
      letter-spacing: 0.03em;
      padding-bottom: 10px;
    }

    .footer-icons-list {
      margin: 0;
      padding: 0;
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

    .footer-description {
      p {
        margin: 0;
        padding: 0;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        letter-spacing: 0.03em;
      }
    }
  }

  // Responsive styling
  @media ${device.laptop} {
    .shapes-wrapper {
      bottom: -1.5em;
      left: 2em;
      svg {
        width: 50%;
      }
    }

    .footer-content {
      padding-top: 100px;
      padding-bottom: 50px;

      .email {
        font-size: 20px;
        padding-bottom: 0px;
      }

      .footer-icons-list {
        padding-bottom: 20px;
        li {
          padding: 0 15px;
          svg {
            width: 20px;
          }
        }
      }

      .footer-description {
        p {
          font-size: 12px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .shapes-wrapper {
      bottom: 8em;
      left: 3em;
      svg {
        height: 100%;
        width: 30%;
      }
    }

    .footer-content {
      padding-top: 70px;

      .email {
        font-size: 18px;
      }
    }
  }
  @media ${device.mobileL} {
    .shapes-wrapper {
      bottom: 8.5em;
      left: 0em;
      svg {
        width: 30%;
      }
    }

    .footer-content {
      .email {
        font-size: 15px;
      }
    }
  }

  @media ${device.mobileM} {
    .footer-content {
      .email {
        font-size: 10px;
      }

      .footer-description {
        p {
          font-size: 10px;
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
          <div className="footer-description">
            <p>Created with Gatsby</p>
            <p>&#169; {new Date().getFullYear()} Emils Bisenieks</p>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
