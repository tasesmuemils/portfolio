// Main packages
import React from "react";
// Styling
import styled from "styled-components";
import { device } from "./mediaQueries";
// Icons
import InstagramIcon from "../assets/Instagram_Icon.svg";
import GithubIcon from "../assets/Github_Icon.svg";
import TwitterIcon from "../assets/Twitter_Icon.svg";
// Components
import Logo from "../assets/EB_logo.svg";

const Navigation = styled.nav`
  * {
    /* border: 1px solid red; */
  }
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  color: var(--white);
  padding-top: 10px;

  li {
    list-style: none;
  }

  .logo-nav-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      svg {
        width: 15%;
      }
    }

    .nav-items {
      display: flex;
      justify-content: center;

      li {
        text-align: center;
        padding: 0 1.25em;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
      }
    }
  }

  .nav-icons {
    display: flex;
    justify-content: end;
    /* padding-left: 20px; */

    li {
      padding: 0 25px;
      display: flex;
      align-items: center;

      svg {
        width: 30px;
      }
    }
  }

  // Responsive design
  @media ${device.laptopL} {
    .nav-icons {
      li {
        padding: 0 20px;
      }
    }
  }

  @media ${device.laptop} {
    .logo-nav-items {
      .logo {
        display: flex;
        align-items: center;
        h2 {
          font-size: 1.5em;
          padding: 0;
          margin: 0;
        }
      }

      .nav-items {
        display: flex;
        justify-content: start;
        padding: 0;

        li {
          padding: 0em 0.5em;
          margin: 0 10px;
          font-size: 18px;
        }
      }
    }

    .nav-icons {
      li {
        padding: 0 15px;
        display: flex;
        align-items: right;

        svg {
          width: 20px;
        }
      }
    }
  }

  @media ${device.tablet} {
    padding: 0 20px;
    grid-template-columns: 1fr;

    .logo-nav-items {
      .logo {
        svg {
          width: 30%;
        }
      }
      .nav-items {
        justify-content: end;
        li {
          margin: 0 0 0 10px;
          font-size: 15px;
        }
      }
    }

    .nav-icons {
      display: none;
    }
  }

  @media ${device.mobileS} {
    padding: 0 5px;
    grid-template-columns: 1fr;

    .logo-nav-items {
      padding-top: 10px;
      grid-template-columns: 1fr;
      .logo {
        svg {
          margin: 0 auto;
        }
      }
      .nav-items {
        justify-content: center;
        li {
          margin: 0 0 0 10px;
          font-size: 15px;
        }
      }
    }
  }
`;

export default function Nav() {
  return (
    <Navigation>
      <div className="logo-nav-items">
        <div className="logo">
          <Logo />
        </div>
        <ul className="nav-items">
          <li>About</li>
          <li>Projects</li>
        </ul>
      </div>
      <ul className="nav-icons">
        <li>
          <InstagramIcon />
        </li>
        <li>
          <GithubIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
    </Navigation>
  );
}
